
export class Articulo {
    private id: number
    private nombre: string
    private precio: number
    private fav: boolean
    private descripcion?: string
    private imagen?: string

    constructor(
        id: number,
        nombre: string,
        precio: number,
        fav: boolean,
        descripcion: string,
        imagen: string
    ) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.fav = fav
        this.descripcion = descripcion
        this.imagen = imagen
    }

    public getId(): number {
        return this.id
    }

    public setId(id: number): void {
        this.id = id
    }

    public getNombre(): string {
        return this.nombre
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre
    }

    public getPrecio(): number {
        return this.precio
    }

    public setPrecio(precio: number): void {
        this.precio = precio
    }

    public isFav(): boolean {
        return this.fav;
    }

    public setFav(fav: boolean): void {
        this.fav = fav;
    }
    
    public getDescripcion(): string |undefined {
        return this.descripcion
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion
    }

    public getImagen(): string | undefined {
        return this.imagen
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen
    }

}