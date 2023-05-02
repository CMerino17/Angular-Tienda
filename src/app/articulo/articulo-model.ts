
export class Articulo {
    private id: number
    private nombre: string
    private precio: number
    private fav: boolean
    private S: boolean
    private M: boolean
    private L: boolean
    private XL: boolean
    private descripcion?: string
    private imagen?: string

    constructor(
        id: number,
        nombre: string,
        precio: number,
        fav: boolean,
        descripcion: string,
        imagen: string,
        S: boolean,
        M: boolean,
        L: boolean,
        XL: boolean,
    ) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.fav = fav
        this.descripcion = descripcion
        this.imagen = imagen
        this.S = S
        this.M = M
        this.L = L
        this.XL = XL
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

    public isS(): boolean {
        return this.S;
    }

    public setS(S: boolean): void {
        this.S = S;
    }

    public isM(): boolean {
        return this.M;
    }

    public setM(M: boolean): void {
        this.M = M;
    }

    public isL(): boolean {
        return this.L;
    }

    public setL(L: boolean): void {
        this.L = L;
    }

    public isXL(): boolean {
        return this.XL;
    }

    public setXL(XL: boolean): void {
        this.XL = XL;
    }

}