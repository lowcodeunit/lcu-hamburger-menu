export class HamburgerMenuModel {
    public Label:string;
    public Icon?:string;
    public Url:string;
    public Disabled:string;

    /**
     * 
     * @param label The string to be displayed in the menu
     * 
     * @param icon The icon that accompanies the menu string
     * 
     * @param url the link associated with the menu item
     * 
     * @param disabled is the button disabled string = true or false
     */
    constructor(label: string, url: string, disabled: string, icon?: string ){
        this.Label = label;
        this.Icon = icon;
        this.Url = url;
        this.Disabled = disabled;
    }
}
