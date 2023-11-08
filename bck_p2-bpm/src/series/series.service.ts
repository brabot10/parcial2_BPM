import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { Serie } from './entities/series.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private serieRepository: Repository<Serie>,
  ) {}

  async create(createSerieDto: CreateSeriesDto): Promise<Serie> {
    const existeSerie = await this.serieRepository.findOneBy({
      titulo: createSerieDto.titulo,
      sinopsis: createSerieDto.sinopsis,
      director: createSerieDto.director,
      duracion: createSerieDto.duracion,
      fechaEstreno: createSerieDto.fechaEstreno,
    });

    if (existeSerie) {
      throw new ConflictException('La serie ya existe');
    }

    return this.serieRepository.save({
      titulo: createSerieDto.titulo.trim(),
      sinopsis: createSerieDto.sinopsis.trim(),
      director: createSerieDto.director.trim(),
      duracion: createSerieDto.duracion,
      fechaEstreno: createSerieDto.fechaEstreno,
    });
  }

  async findAll(): Promise<Serie[]> {
    return this.serieRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`No existe la Serie ${id}`);
    }
    return serie;
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto): Promise<Serie> {
    const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`No existe la Serie ${id}`);
    }
    const serieUpdate = Object.assign(serie, updateSeriesDto);
    return this.serieRepository.save(serieUpdate);
  }

  async remove(id: number) {
    const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`No existe la Serie ${id}`);
    }
    return this.serieRepository.delete(id);
  }
}
