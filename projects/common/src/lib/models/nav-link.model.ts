/**
 * Model for naviation link structure
 */
export class NavLinkModel {

    /**
     * Menu icon
     */
    public Icon?: string;

    /**
     * Menu label
     */
    public Label: string;

    /**
     * Menu parameter
     */
    public Param?: string;

    /**
     * Navigation URL
     */
    public Url: string;

    /**
     * String value true or false, whether or not to grey out the button
     */
    public Disabled: string;

    constructor(label: string, Url: string, icon?: string, param?: string, disabled?: string) {
        this.Icon = icon;
        this.Label = label;
        this.Url = Url;
        this.Param = param;
        this.Disabled = disabled;
    }
}