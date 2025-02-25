import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create.ninjas.dto';
import { UpdateNinjaDto } from './dto/update.ninjas.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: "Ninja 1", weapon: "stars" },
        { id: 1, name: "Ninja 2", weapon: "nunChuks" },
    ]

    getNinjas(weapon: "stars" | "nunChuks") {
        if (weapon) {
            return this.ninjas.filter(ninja => ninja.weapon === weapon)
        }
        return this.ninjas
    }

    getNinjasById(id: number) {
        const ninja = this.ninjas.find(ninja => ninja.id === id)
        if (!ninja) {
            throw new Error('Ninja not found')
        }
        return ninja
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const createNinjasWithId = {
            ...createNinjaDto,
            id: Date.now()
        }
        this.ninjas.push(createNinjasWithId)

        return createNinjasWithId
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        this.ninjas = this.ninjas.map(ninja => {
            if (ninja.id === id) {
                return { ...ninja, ...updateNinjaDto }
            }
            return ninja
        })
        return this.getNinjasById(id)
    }

    deleteNinja(id: number) {
        const deletedNinja = this.ninjas.filter(ninja => ninja.id == id)
        if (!deletedNinja) {
            throw new Error('Ninja not found')
        }
        return deletedNinja
    }
}
