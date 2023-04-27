export class Layouts {
    private logo: string
    private imagenesCarrusel: string[];

    constructor(logo: string, imagenesCarrusel: string[]) {
        this.logo = logo;
        this.imagenesCarrusel = imagenesCarrusel;
    }

    public getLogo(): string {
        return this.logo;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

    public getImagenesCarrusel(): string[] {
        return this.imagenesCarrusel;
    }

    public setImagenesCarrusel(imagenesCarrusel: string[]): void {
        this.imagenesCarrusel = imagenesCarrusel;
    }

}