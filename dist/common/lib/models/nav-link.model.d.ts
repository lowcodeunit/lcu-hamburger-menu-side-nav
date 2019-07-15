/**
 * Model for naviation link structure
 */
export declare class NavLinkModel {
    /**
     * Menu icon
     */
    Icon?: string;
    /**
     * Menu label
     */
    Label: string;
    /**
     * Menu parameter
     */
    Param?: string;
    /**
     * Navigation URL
     */
    Url: string;
    /**
     * String value true or false, whether or not to grey out the button
     */
    Disabled: string;
    constructor(label: string, Url: string, icon?: string, param?: string, disabled?: string);
}
