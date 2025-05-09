import { Expose, Transform } from "class-transformer";

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  price: number;

  @Expose()
  year: number

  @Expose()
  lng: number

  @Expose()
  lat: number

  @Expose()
  mileage: number

  @Expose()
  approved: boolean

  @Transform(({ obj }) => obj.id)
  @Expose()
  userId: number
}