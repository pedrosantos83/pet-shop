import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private clientsService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const client = await this.clientsService.findOne(email);
    if (client?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: client.name, email: client.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
