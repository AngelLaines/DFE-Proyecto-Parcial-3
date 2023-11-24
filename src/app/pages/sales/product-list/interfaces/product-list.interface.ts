export interface ProductInterface{
    id: string,
    name:string,
    src: string,
    precio:string,
    descripcion:string,
    plataforma: PlatformsInterface
}

export type PlatformsInterface = {
    play?:string,
    xbox?:string,
    switch?:string,
};