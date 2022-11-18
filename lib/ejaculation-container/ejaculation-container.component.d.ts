import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EjaculationContainerComponent implements OnInit {
    color: string;
    mainRef: ElementRef;
    private view_mode;
    constructor(isMini: any, isExMini: any);
    ngOnInit(): void;
    getSvgBackColor: () => string;
    getSvgColor: () => string;
    getSvgPath: () => string;
    getSdwColor: () => string;
    getSvgWidth: (wthOfset?: boolean) => number;
    getSvgHeight: (wthOfset?: boolean) => number;
    getSvgTransform: () => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EjaculationContainerComponent, [{ attribute: unknown; optional: true; }, { attribute: unknown; optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EjaculationContainerComponent, "app-ejaculation-container", never, { "color": "color"; }, {}, never, ["*"], false>;
}
