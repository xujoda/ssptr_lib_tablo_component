import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AllReaderService } from '@xujoda/ssptr_lib_base_data';
import { IAnyEntity, IEntityOptions } from '@xujoda/ssprt_lib_base_types';
import { ISheduleEntity } from '@xujoda/ssptr_lib_fids';
import * as i0 from "@angular/core";
declare const FADE_IN = "fade-In";
declare const FADE_OUT = "fade-Out";
declare type aState = typeof FADE_IN | typeof FADE_OUT;
export declare class AppHandmadeSheduleComponent implements OnInit, OnDestroy, AfterViewInit {
    readerService: AllReaderService;
    private activatedRoute;
    dataSource: MatTableDataSource<IAnyEntity>;
    columnsEx$: Subject<{
        name: string;
        caption: string;
    }[]>;
    columns$: Observable<string[]>;
    hypercolumns$: Observable<string[]>;
    progress$: Observable<number>;
    aState$: Subject<aState>;
    shedulesMeta$: Observable<({
        option: IEntityOptions<ISheduleEntity>;
        caption: any;
        subcaption: any;
        shedule: ISheduleEntity[];
        pagData: number[];
        columns: {
            name: string;
            caption: string;
        }[];
    })[]>;
    destroy$: Subject<unknown>;
    viewOpt?: ({
        caption: string;
        subcaption: string;
        headColSpans1: number;
        headColSpans2: number;
    });
    viewParams: ({
        showTime: number;
        rowsOnPage: number;
        progressGrade: number;
    });
    constructor(readerService: AllReaderService, activatedRoute: ActivatedRoute);
    private parceParams;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    capToName: (xs: ({
        name: string;
        caption: string;
    })[] | null) => string[] | undefined;
    private tableToColumnsN;
    private tableToPaginating;
    private getPaginatingIdx;
    private selectPageRowsN;
    isStyle: (fieldname: string) => boolean;
    isStyle1: (fieldname: string) => boolean;
    isStyle2: (fieldname: string) => boolean;
    isStyle3: (fieldname: string) => boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppHandmadeSheduleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppHandmadeSheduleComponent, "app-handmade-shedule", never, {}, {}, never, never, false>;
}
export {};
