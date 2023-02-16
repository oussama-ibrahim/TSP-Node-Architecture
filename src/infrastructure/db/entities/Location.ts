import { Entity, Property, PrimaryKey, DateTimeType, UuidType } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { TLocation } from '../../../entities/location';

@Entity()
export class Location implements TLocation {
    @PrimaryKey({ type: UuidType })
    id = uuidv4();

    @Property()
    lng!: number;
  
    @Property()
    lat!: number;
  
    @Property({ type: DateTimeType })
    createdAt: Date = new Date();
  
    @Property({ type: DateTimeType, onUpdate: () => new Date() })
    updatedAt: Date = new Date();

  constructor(lng: number,lat:number) {
    this.lng = lng;
    this.lng = lat;
  }
}
