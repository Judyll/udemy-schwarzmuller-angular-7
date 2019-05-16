/**
 * We will define a single recipe here.  We will not define
 * @Model directive here.  This is just a blueprint that we
 * can instantiate.
 */
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
