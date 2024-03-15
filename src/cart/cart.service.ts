import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
  ){}
  create(createCartDto: CreateCartDto) {
    return this.cartRepository.save(createCartDto);
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: number) {
    return this.cartRepository.findOne({where :{id:id}});
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepository.update(id,updateCartDto);
  }

  remove(id: number) {
    return this.cartRepository.delete(id);
  }
}
