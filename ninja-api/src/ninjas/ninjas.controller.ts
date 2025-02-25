import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create.ninjas.dto';
import { UpdateNinjaDto } from './dto/update.ninjas.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) { }

    //  GET /ninjas?weapon=stars | nunChuks 
    @Get()
    getNinjas(@Query("weapon") weapon: "stars" | "nunChuks") {
        // const ninjaWeapon = new NinjasService
        return this.ninjasService.getNinjas(weapon)
    }

    // GET /ninjas/:id
    @Get(':id')
    getNinjasById(@Param("id") id: string) {
        try {
            return this.ninjasService.getNinjasById(+id)
        } catch (error) {
            throw new NotFoundException()
        }
    }

    // POST /ninjas
    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {       // here => new ValidationPipe() is used to validate the incoming data from the create.ninjas.dto.ts
        return this.ninjasService.createNinja(createNinjaDto)
    }

    // PUT /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja(+id, updateNinjaDto)
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    deleteNinja(@Param('id') id: string) {
        return this.ninjasService.deleteNinja(+id)
    }
}
