import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dtos/create-breed.dot';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private dogBreedRepository: Repository<DogBreed>,
  ) {}

  findAll(): Promise<DogBreed[]> {
    return this.dogBreedRepository.find();
  }

  create({ name, pictureUrl }: CreateBreedDto) {
    this.dogBreedRepository.insert({ Name: name, PictureURL: pictureUrl });
  }
}
