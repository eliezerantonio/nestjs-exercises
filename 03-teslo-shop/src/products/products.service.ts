import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);

      await this.productRepository.save(product);

      return product;
    } catch (error) {
      this.handleDbException(error);
    }
  }

  async findAll() {
    try {
      return this.productRepository.find();
    } catch (error) {
      this.handleDbException(error);
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOneBy({ id });

      if (!product) throw new NotFoundException('Product not found');

      return product;
    } catch (error) {
      this.handleDbException(error);
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    try {
      const product = await this.findOne(id);

      await this.productRepository.remove(product);
    } catch (error) {
      this.handleDbException(error);
    }
  }

  private handleDbException(error: any) {
    if (error.code === '23505') throw new BadGatewayException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected erro, check server logs',
    );
  }
}
