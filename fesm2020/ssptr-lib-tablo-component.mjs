import * as i0 from '@angular/core';
import { Component, Optional, Attribute, Input, ViewChild, NgModule } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i5 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subject, NEVER, combineLatest, interval, timer } from 'rxjs';
import { takeUntil, filter, map, switchMap, startWith, take } from 'rxjs/operators';
import { XlsSheduleWOption, XlsSheduleSOption, XlsSheduleLocOption, SsptrFidsModule } from '@xujoda/ssptr_lib_fids';
import * as i1 from '@xujoda/ssptr_lib_base_data';
import * as i2 from '@angular/router';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i6 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i7 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

var mode;
(function (mode) {
    mode[mode["NORMAL"] = 0] = "NORMAL";
    mode[mode["MINI"] = 1] = "MINI";
    mode[mode["EXTRAMINI"] = 2] = "EXTRAMINI";
})(mode || (mode = {}));
;
const MINI_SIZE_ATR = 'mat-mini-fab';
const EXTRA_MINI_SIZE_ATR = 'mat-extra-mini-fab';
const SDW_CLR = "rgba(0,0,0,0.5)";
const VIEW_CFG = ({
    [mode.NORMAL]: { wdh: 62, hgt: 79, mrx1: 0.208, mrx4: 0.208, mrx5: -24, mrx6: -27, ofstVrt: -30, ofstHor: -5 },
    [mode.MINI]: { wdh: 44, hgt: 56, mrx1: 0.148, mrx4: 0.148, mrx5: -17, mrx6: -19, ofstVrt: -16, ofstHor: 0 },
    [mode.EXTRAMINI]: { wdh: 32, hgt: 40, mrx1: 0.105, mrx4: 0.105, mrx5: -12, mrx6: -13, ofstVrt: -11, ofstHor: 2 },
});
const SVG_PATH = "M 279.6380310058594 133.36993408203125 " +
    "C 210.131591796875 133.5400390625 153.7141571044922 187.43788146972656 129.13217163085938 285.9844970703125 " +
    "C 109.89353942871094 363.1101989746094 112.97976684570312 503.7231750488281 143.8748779296875 505.3211975097656 " +
    "C 179.50111389160156 507.1639404296875 172.5738525390625 433.8542175292969 277.1315002441406 392.29327392578125 " +
    "C 373.069580078125 354.15850830078125 404.0740051269531 331.1825866699219 411.0225524902344 258.3337097167969 " +
    "C 415.041259765625 185.6850128173828 351.48028564453125 133.42515563964844 279.6380310058594 133.36993408203125 Z";
class EjaculationContainerComponent {
    constructor(isMini, isExMini) {
        this.color = "primary";
        this.view_mode = mode.NORMAL;
        this.getSvgBackColor = () => window.getComputedStyle(this.mainRef.nativeElement).backgroundColor;
        this.getSvgColor = () => window.getComputedStyle(this.mainRef.nativeElement).color;
        this.getSvgPath = () => SVG_PATH;
        this.getSdwColor = () => SDW_CLR;
        this.getSvgWidth = (wthOfset = false) => VIEW_CFG[this.view_mode].wdh + (wthOfset ? VIEW_CFG[this.view_mode].ofstHor : 0);
        this.getSvgHeight = (wthOfset = false) => VIEW_CFG[this.view_mode].hgt + (wthOfset ? VIEW_CFG[this.view_mode].ofstVrt : 0);
        this.getSvgTransform = () => "matrix("
            + VIEW_CFG[this.view_mode].mrx1 + ",0,0,"
            + VIEW_CFG[this.view_mode].mrx4 + ","
            + VIEW_CFG[this.view_mode].mrx5 + ","
            + VIEW_CFG[this.view_mode].mrx6 +
            ")";
        this.view_mode = (isMini == undefined)
            ? (isExMini == undefined)
                ? mode.NORMAL
                : mode.EXTRAMINI
            : mode.MINI;
    }
    ngOnInit() {
    }
}
EjaculationContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: EjaculationContainerComponent, deps: [{ token: MINI_SIZE_ATR, attribute: true, optional: true }, { token: EXTRA_MINI_SIZE_ATR, attribute: true, optional: true }], target: i0.ɵɵFactoryTarget.Component });
EjaculationContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: EjaculationContainerComponent, selector: "app-ejaculation-container", inputs: { color: "color" }, viewQueries: [{ propertyName: "mainRef", first: true, predicate: ["main"], descendants: true, static: true }], ngImport: i0, template: "<div #main [ngClass]=\"color\" style=\"visibility:collapse\" ></div>\r\n<span [style.height.px] = \"getSvgHeight()\"  [style.width.px] = \"getSvgWidth()\" class=\"ejac-container\" > \r\n    <div class=\"ejac-pic\"  > \r\n        <!-- [style.height.px] = \"getSvgHeight()\" -->\r\n        <svg [attr.height] = \"getSvgHeight()\" [attr.width] =\"getSvgWidth()\" [attr.stroke]=\"getSvgBackColor()\" [attr.fill] = \"getSvgBackColor()\" >\r\n            <!-- <filter id=\"blur\">\r\n                <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" />\r\n            </filter>\r\n            <path  [attr.stroke]=\"getSdwColor()\" [attr.fill] = \"getSdwColor()\"  [attr.d] = \"getSvgPath()\" [attr.transform] = \"getSvgTransform()\" filter=\"url(#blur)\" /> -->\r\n            <path [attr.d] = \"getSvgPath()\" [attr.transform] = \"getSvgTransform()\"  />\r\n        </svg>\r\n    </div>\r\n    <div [style.height.px] = \"getSvgHeight(true)\"  [style.width.px] = \"getSvgWidth(true)\"  class=\"ejac-cnt\" [ngClass]=\"color\" >\r\n        <ng-content></ng-content>\r\n    </div>\r\n</span>\r\n\r\n", styles: [".ejac-container{position:relative;background-color:transparent;display:inline-block;overflow:visible}.ejac-pic{background:transparent;z-index:1;position:absolute;top:0;left:0;overflow:visible}.ejac-cnt{right:0;z-index:2;display:flex;justify-content:center;align-items:center;position:absolute;background:transparent}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: EjaculationContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-ejaculation-container', template: "<div #main [ngClass]=\"color\" style=\"visibility:collapse\" ></div>\r\n<span [style.height.px] = \"getSvgHeight()\"  [style.width.px] = \"getSvgWidth()\" class=\"ejac-container\" > \r\n    <div class=\"ejac-pic\"  > \r\n        <!-- [style.height.px] = \"getSvgHeight()\" -->\r\n        <svg [attr.height] = \"getSvgHeight()\" [attr.width] =\"getSvgWidth()\" [attr.stroke]=\"getSvgBackColor()\" [attr.fill] = \"getSvgBackColor()\" >\r\n            <!-- <filter id=\"blur\">\r\n                <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" />\r\n            </filter>\r\n            <path  [attr.stroke]=\"getSdwColor()\" [attr.fill] = \"getSdwColor()\"  [attr.d] = \"getSvgPath()\" [attr.transform] = \"getSvgTransform()\" filter=\"url(#blur)\" /> -->\r\n            <path [attr.d] = \"getSvgPath()\" [attr.transform] = \"getSvgTransform()\"  />\r\n        </svg>\r\n    </div>\r\n    <div [style.height.px] = \"getSvgHeight(true)\"  [style.width.px] = \"getSvgWidth(true)\"  class=\"ejac-cnt\" [ngClass]=\"color\" >\r\n        <ng-content></ng-content>\r\n    </div>\r\n</span>\r\n\r\n", styles: [".ejac-container{position:relative;background-color:transparent;display:inline-block;overflow:visible}.ejac-pic{background:transparent;z-index:1;position:absolute;top:0;left:0;overflow:visible}.ejac-cnt{right:0;z-index:2;display:flex;justify-content:center;align-items:center;position:absolute;background:transparent}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Attribute,
                    args: [MINI_SIZE_ATR]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Attribute,
                    args: [EXTRA_MINI_SIZE_ATR]
                }] }]; }, propDecorators: { color: [{
                type: Input
            }], mainRef: [{
                type: ViewChild,
                args: ['main', { static: true }]
            }] } });

const FADE_IN = 'fade-In'; //проявка
const FADE_OUT = 'fade-Out'; //гаш
/// METADATA CONSTS
const META_PROP_NAME_IS_DISP = "Display";
const META_PROP_NAME_IS_DESCR = "Description";
const META_PROP_NAME_IS_DISPNAME = "DisplayName";
const FADE_TIME = 500;
const REG_GR_ID = 'REG';
const LOC_GR_ID = 'LOC';
const ORD_GR_ID = 'ORD';
const GR_CFG = ({
    [REG_GR_ID]: ({
        exclCol: ['id', 'Caption', 'TypeId', 'CustAccount'],
        colspans: [9, 7],
        fieldCaptions: ({
            ["CustCode"]: "АК",
            ["FlightD"]: "Рейс",
            ["AircraftType"]: "Тип ВС",
            ["DestD"]: "Направление",
            ["ArrTimeD"]: "Вылет",
            ["DepTimeD"]: "Прибытие",
            ["PeriodD"]: "Период",
            ["DaysD"]: "Дни",
            ["Trans"]: "Посадка в",
            ["FlightA"]: "Рейс",
            ["DestA"]: "Направление",
            ["ArrTimeA"]: "Вылет",
            ["DepTimeA"]: "Прибытие",
            ["PeriodA"]: "Период",
            ["DaysA"]: "Дни",
            ["Cust"]: "Перевозчик",
        })
    }),
    [LOC_GR_ID]: ({
        exclCol: ['id', 'Caption', 'DaysD', 'DaysA', 'TypeId', 'CustAccount', 'AircraftType', 'Trans', 'CustCode', 'Cust'],
        colspans: [5, 5],
        fieldCaptions: ({
            ["FlightD"]: "№ Рейсa",
            ["DestD"]: "Маршрут",
            ["ArrTimeD"]: "Вылет",
            ["DepTimeD"]: "Прибытие",
            ["PeriodD"]: "Даты вылета",
            ["FlightA"]: "№ Рейсa",
            ["DestA"]: "Маршрут",
            ["ArrTimeA"]: "Вылет",
            ["DepTimeA"]: "Прибытие",
            ["PeriodA"]: "Даты вылета",
        })
    })
});
const CALC_SUBROW_FIELDS = ['ArrTimeD', 'PeriodD'];
const COLS_STYLE1 = ['DestD', 'Trans', 'DestA'];
const COLS_STYLE2 = ['CustCode', 'FlightD', 'FlightA', 'Cust'];
const COLS_STYLE3 = ['ArrTimeD', 'DepTimeD', 'PeriodD', 'DaysD', 'ArrTimeA', 'DepTimeA', 'PeriodA', 'DaysA'];
class AppHandmadeSheduleComponent {
    constructor(readerService, activatedRoute) {
        this.readerService = readerService;
        this.activatedRoute = activatedRoute;
        this.dataSource = new MatTableDataSource();
        //shedules$: Observable<ISheduleEntity[][]> = NEVER;        // Новые данные прилетели по линии стэйта (либо обновились, либо другой источник)
        this.columnsEx$ = new Subject();
        this.columns$ = NEVER;
        this.hypercolumns$ = NEVER;
        this.progress$ = NEVER;
        this.aState$ = new Subject();
        this.shedulesMeta$ = NEVER; //IMetadata
        this.destroy$ = new Subject();
        this.viewOpt = undefined;
        //Cust tunable parameters
        this.viewParams = ({
            showTime: 20000,
            rowsOnPage: 40,
            progressGrade: 50
        });
        this.parceParams = (params) => {
            this.viewParams = ({
                ...this.viewParams,
                showTime: (isNaN(parseInt(params?.["showTime"])) ? this.viewParams.showTime : parseInt(params?.["showTime"])),
                rowsOnPage: (isNaN(parseInt(params?.["rowsOnPage"])) ? this.viewParams.rowsOnPage : parseInt(params?.["rowsOnPage"])),
                progressGrade: (isNaN(parseInt(params?.["progressGrade"])) ? this.viewParams.progressGrade : parseInt(params?.["progressGrade"]))
            });
        };
        // fields names from columns$ data 
        this.capToName = (xs) => xs?.map(x => x.name);
        /// Columns list w/o excluded 
        this.tableToColumnsN = (table) => 
        //table.length >0 ? table[0].TypeId : ""
        Object.keys(table[0]).filter(a => GR_CFG[(table[0].TypeId)].exclCol.indexOf(a) < 0)
            .map(colname => ({ name: colname, caption: GR_CFG[(table[0].TypeId)].fieldCaptions?.[colname] ?? colname }));
        /// table to Paginatind data [[startRow1, sr2, ... ], [sr, sr ]] 
        this.tableToPaginating = (table) => table
            .map(row => CALC_SUBROW_FIELDS.reduce((a, e) => Math.max(row[e].split("\n").length, a), 1))
            .reduce((a, e, i) => (a.counter + e > this.viewParams.rowsOnPage)
            ? ({ ret: [...a.ret, i], counter: 0 })
            : ({ ret: a.ret, counter: a.counter + e }) // index first row of page
        , ({ ret: ([0]), counter: 0 }) // TODO last page to bottom
        ).ret;
        // calc indexes of page [ table index, page index]
        this.getPaginatingIdx = (paginatings, ind) => //paginatings:number[][]
         paginatings.reduce((act, tb, itb) => tb.reduce((acpg, s, ipg) => ({
            ret: (acpg.i == (ind % paginatings.reduce((a, e) => a + e.length, 0)) ? [itb, ipg] : acpg.ret),
            i: (acpg.i + 1)
        }), act), ({ ret: [0, 0], i: 0 })).ret;
        // select data for view page
        this.selectPageRowsN = (shedule, pages, idx2) => shedule.filter((row, i) => i >= pages[idx2] && (pages.length == idx2 + 1 || i < pages[idx2 + 1]));
        this.isStyle = (fieldname) => !this.isStyle1(fieldname) && !this.isStyle2(fieldname) && !this.isStyle3(fieldname);
        this.isStyle1 = (fieldname) => (COLS_STYLE1.indexOf(fieldname) >= 0);
        this.isStyle2 = (fieldname) => (COLS_STYLE2.indexOf(fieldname) >= 0);
        this.isStyle3 = (fieldname) => (COLS_STYLE3.indexOf(fieldname) >= 0);
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$)).subscribe(this.parceParams);
        //console.log("dddd");
        // this.gruelSvs.registry();
    }
    ngOnInit() {
        this.shedulesMeta$ = combineLatest([XlsSheduleWOption, XlsSheduleSOption, XlsSheduleLocOption]
            .map(dsOpt => this.readerService.getMeta$(dsOpt).pipe(filter(x => !!x), map(m => ({ option: dsOpt, meta: m }))))).pipe(
        //tap( x=> console.log(x) ),
        map(xs => xs.filter(x => !(x.meta?.[META_PROP_NAME_IS_DISP] === false))
            .map(x => ({
            option: x.option,
            caption: x.meta?.[META_PROP_NAME_IS_DISPNAME],
            subcaption: x.meta?.[META_PROP_NAME_IS_DESCR]
        }))), switchMap(xs => combineLatest(xs.map(meta => this.readerService.getAllNullT$(meta.option).pipe(filter(x => !!x), map(sdl => sdl ? sdl : []), map(sdl => ({
            shedule: sdl,
            pagData: this.tableToPaginating(sdl),
            columns: this.tableToColumnsN(sdl),
            ...meta
        }))))))).pipe(takeUntil(this.destroy$));
        this.columns$ = this.columnsEx$.pipe(map(xs => xs.map(x => x.name)));
        this.hypercolumns$ = this.columnsEx$.pipe(map(xs => xs.map(x => 'хй')));
    }
    ngAfterViewInit() {
        this.shedulesMeta$.pipe(switchMap(shdls => interval(this.viewParams.showTime).pipe(startWith(-1), map(i => ({ shdls: shdls, idx: i })))), // run page iterator
        map(shdlsOpt => ({ ...shdlsOpt, idx: this.getPaginatingIdx(shdlsOpt.shdls.map(x => x.pagData), shdlsOpt.idx) })), // abs index to ref index
        //tap( x=> console.log(x)),   // abs index to ref index
        switchMap(shdlsOpt => timer(0, FADE_TIME).pipe(take(2), map(x => ({ ...shdlsOpt, st: (x ? FADE_IN : FADE_OUT) }))))).subscribe(shdlsOpt => {
            this.aState$.next(shdlsOpt.st);
            if (shdlsOpt.st == FADE_IN) {
                this.viewOpt = ({
                    caption: shdlsOpt.shdls[shdlsOpt.idx[0]].caption
                        + ((shdlsOpt.shdls[shdlsOpt.idx[0]].pagData.length > 1)
                            ? (' [ стр: ' + (shdlsOpt.idx[1] + 1) + ' из ' + shdlsOpt.shdls[shdlsOpt.idx[0]].pagData.length + ' ] ')
                            : ' '),
                    subcaption: shdlsOpt.shdls[shdlsOpt.idx[0]].subcaption,
                    headColSpans1: GR_CFG[shdlsOpt.shdls[shdlsOpt.idx[0]].shedule[0].TypeId].colspans[0],
                    headColSpans2: GR_CFG[shdlsOpt.shdls[shdlsOpt.idx[0]].shedule[0].TypeId].colspans[1],
                });
                this.columnsEx$.next(shdlsOpt.shdls[shdlsOpt.idx[0]].columns);
                this.dataSource.data = this.selectPageRowsN(shdlsOpt.shdls[shdlsOpt.idx[0]].shedule, shdlsOpt.shdls[shdlsOpt.idx[0]].pagData, shdlsOpt.idx[1]);
            }
            else {
                this.progress$ = interval(this.viewParams.showTime / this.viewParams.progressGrade).pipe(take(this.viewParams.progressGrade), map(x => (x + 2) * 100 / this.viewParams.progressGrade));
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(undefined);
        this.destroy$.complete();
    }
}
AppHandmadeSheduleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: AppHandmadeSheduleComponent, deps: [{ token: i1.AllReaderService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
AppHandmadeSheduleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: AppHandmadeSheduleComponent, selector: "app-handmade-shedule", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" color = \"accent\"  [value] = \"progress$|async\" class = \"progress-fids\" ></mat-progress-bar>\r\n\r\n<mat-toolbar class = \"header-caption-fids ssptr-primary-darker-text\">\r\n  <div  > {{ viewOpt?.caption }}</div>\r\n  <div class = \"header-sub-text-fids ssptr-accent-darker-color\"> {{ viewOpt?.subcaption }} </div>\r\n</mat-toolbar> \r\n\r\n<!-- [@fadeIn] = \"{value: state$|async } -->\r\n<!-- 'mat-cell-fids-table': isStyle(disCol.name),  -->\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"fids-table \"  [@fadeIn] = \"{value: aState$ | async }\" >\r\n    <ng-container *ngFor=\"let disCol of (columnsEx$ | async); let colIndex = index\" matColumnDef=\"{{disCol.name}}\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"fids-table-col ssptr-primary-darker-text-2\" [ngClass]=\"{ 'mat-cell-Center': isStyle3(disCol.name) }\" >{{disCol.caption}}</th>\r\n      <td mat-cell *matCellDef=\"let element\"  class = ma\r\n            [ngClass]=\"{  'mat-cell-Flight': isStyle1(disCol.name),\r\n                          'ssptr-primary-lighter-color' : isStyle1(disCol.name), \r\n                          'ssptr-primary-darker-color':   isStyle2(disCol.name), \r\n                          'mat-cell-Center': isStyle3(disCol.name)  \r\n                        }\"  >\r\n           {{element[disCol.name]}}\r\n       </td>\r\n    </ng-container>\r\n\r\n    <!-- Header row first group -->\r\n    <ng-container matColumnDef=\"header-row-first-group\">\r\n      <th mat-header-cell *matHeaderCellDef   [attr.colspan]=\"viewOpt?.headColSpans1\"  class=\"ssptr-primary-darker-text-2\">  \r\n        <app-ejaculation-container  mat-extra-mini-fab class = 'ejac-cnt' color = \"ssptr-accent-main-text\" > \r\n          <mat-icon>flight_takeoff</mat-icon> \r\n        </app-ejaculation-container>\r\n        <span>  \u0412\u042B\u041B\u0415\u0422 \u0418\u0417 \u041D\u0418\u0416\u041D\u0415\u0412\u0410\u0420\u0422\u041E\u0412\u0421\u041A\u0410  </span>\r\n       </th>\r\n    </ng-container>\r\n    \r\n    <!-- Header row second group -->\r\n    <ng-container matColumnDef=\"header-row-second-group\" >\r\n      <th mat-header-cell *matHeaderCellDef   [attr.colspan]=\"viewOpt?.headColSpans2\"  class=\"ssptr-primary-darker-text-2\" >  \r\n        <!-- <button mat-mini-fab  class = \"fids-accent-text\" >  <mat-icon>flight_land</mat-icon> </button> -->\r\n        <app-ejaculation-container  mat-extra-mini-fab class = 'ejac-cnt' color = \"ssptr-accent-main-text\" > \r\n          <mat-icon>flight_land</mat-icon> \r\n        </app-ejaculation-container>\r\n        <span>  \u041F\u0420\u0418\u041B\u0415\u0422 \u0412 \u041D\u0418\u0416\u041D\u0415\u0412\u0410\u0420\u0422\u041E\u0412\u0421\u041A  </span>\r\n       </th>\r\n    </ng-container>\r\n\r\n    <!-- <tr mat-header-row *matHeaderRowDef=\"columns$ | async\"   ></tr> -->\r\n    <tr mat-header-row *matHeaderRowDef=\"['header-row-first-group', 'header-row-second-group']\" class=\"fids-table-hyper-header-row\"></tr>\r\n    <tr mat-header-row *matHeaderRowDef=\"columns$ | async\"  class=\"fids-table-header-row\"></tr>\r\n    <!-- <tr mat-row  *matRowDef=\"let row; let i = index; columns:  columns$ | async ;\" [ngClass]=\"{'fids-table-row-0':(i%2==0), 'fids-table-row-1': !(i%2==0)}\" ></tr> -->\r\n    <tr mat-row  *matRowDef=\"let row; let i = index; columns:  columns$ | async ;\" \r\n          [ngClass]=\"{'ssptr-primary-lighter-text':(i%2==0), 'ssptr-primary-main-text': !(i%2==0) }\" \r\n          class=\"fids-table-row\" \r\n       \r\n    ></tr>\r\n  </table> \r\n\r\n  ", styles: [".fids-table{width:100%;table-layout:fixed;overflow:hidden}.fids-table-col{padding-left:.2vw;padding-right:.2vw}.mat-cell{padding-left:.2vw;border-bottom-width:0;text-align:left}.mat-header-cell span{padding-left:20px;font-size:120%}.mat-cell-Flight{white-space:pre-line}.mat-cell-Center{text-align:center;white-space:pre-line}.fids-table-header-row{height:30px!important}.fids-table-hyper-header-row{height:40px!important}.fids-table-row{height:2.4vh!important}.mat-column-CustCode{width:4vw}.mat-column-DestD,.mat-column-DestA,.mat-column-Trans{width:9vw}.header-caption-fids{display:flex;flex:1;flex-direction:column;width:100%}.header-caption-fids div{margin-left:auto;margin-right:auto}.header-sub-text-fids{font-size:14px;line-height:16px;height:16px;right:10px}.progress-fids{height:1px}.ejac-cnt{display:inline-block;vertical-align:middle}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i5.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i5.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i6.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i7.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: EjaculationContainerComponent, selector: "app-ejaculation-container", inputs: ["color"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }], animations: [
        trigger('fadeIn', [
            state(FADE_IN, style({ opacity: 1 })),
            state(FADE_OUT, style({ opacity: 0 })),
            transition('* => ' + FADE_IN, animate("{{time}} ease-in"), { params: { time: "0.5s" } }),
            transition('* => ' + FADE_OUT, animate("{{time}} ease-out"), { params: { time: "0.5s" } })
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: AppHandmadeSheduleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-handmade-shedule', animations: [
                        trigger('fadeIn', [
                            state(FADE_IN, style({ opacity: 1 })),
                            state(FADE_OUT, style({ opacity: 0 })),
                            transition('* => ' + FADE_IN, animate("{{time}} ease-in"), { params: { time: "0.5s" } }),
                            transition('* => ' + FADE_OUT, animate("{{time}} ease-out"), { params: { time: "0.5s" } })
                        ])
                    ], template: "<mat-progress-bar mode=\"determinate\" color = \"accent\"  [value] = \"progress$|async\" class = \"progress-fids\" ></mat-progress-bar>\r\n\r\n<mat-toolbar class = \"header-caption-fids ssptr-primary-darker-text\">\r\n  <div  > {{ viewOpt?.caption }}</div>\r\n  <div class = \"header-sub-text-fids ssptr-accent-darker-color\"> {{ viewOpt?.subcaption }} </div>\r\n</mat-toolbar> \r\n\r\n<!-- [@fadeIn] = \"{value: state$|async } -->\r\n<!-- 'mat-cell-fids-table': isStyle(disCol.name),  -->\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"fids-table \"  [@fadeIn] = \"{value: aState$ | async }\" >\r\n    <ng-container *ngFor=\"let disCol of (columnsEx$ | async); let colIndex = index\" matColumnDef=\"{{disCol.name}}\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"fids-table-col ssptr-primary-darker-text-2\" [ngClass]=\"{ 'mat-cell-Center': isStyle3(disCol.name) }\" >{{disCol.caption}}</th>\r\n      <td mat-cell *matCellDef=\"let element\"  class = ma\r\n            [ngClass]=\"{  'mat-cell-Flight': isStyle1(disCol.name),\r\n                          'ssptr-primary-lighter-color' : isStyle1(disCol.name), \r\n                          'ssptr-primary-darker-color':   isStyle2(disCol.name), \r\n                          'mat-cell-Center': isStyle3(disCol.name)  \r\n                        }\"  >\r\n           {{element[disCol.name]}}\r\n       </td>\r\n    </ng-container>\r\n\r\n    <!-- Header row first group -->\r\n    <ng-container matColumnDef=\"header-row-first-group\">\r\n      <th mat-header-cell *matHeaderCellDef   [attr.colspan]=\"viewOpt?.headColSpans1\"  class=\"ssptr-primary-darker-text-2\">  \r\n        <app-ejaculation-container  mat-extra-mini-fab class = 'ejac-cnt' color = \"ssptr-accent-main-text\" > \r\n          <mat-icon>flight_takeoff</mat-icon> \r\n        </app-ejaculation-container>\r\n        <span>  \u0412\u042B\u041B\u0415\u0422 \u0418\u0417 \u041D\u0418\u0416\u041D\u0415\u0412\u0410\u0420\u0422\u041E\u0412\u0421\u041A\u0410  </span>\r\n       </th>\r\n    </ng-container>\r\n    \r\n    <!-- Header row second group -->\r\n    <ng-container matColumnDef=\"header-row-second-group\" >\r\n      <th mat-header-cell *matHeaderCellDef   [attr.colspan]=\"viewOpt?.headColSpans2\"  class=\"ssptr-primary-darker-text-2\" >  \r\n        <!-- <button mat-mini-fab  class = \"fids-accent-text\" >  <mat-icon>flight_land</mat-icon> </button> -->\r\n        <app-ejaculation-container  mat-extra-mini-fab class = 'ejac-cnt' color = \"ssptr-accent-main-text\" > \r\n          <mat-icon>flight_land</mat-icon> \r\n        </app-ejaculation-container>\r\n        <span>  \u041F\u0420\u0418\u041B\u0415\u0422 \u0412 \u041D\u0418\u0416\u041D\u0415\u0412\u0410\u0420\u0422\u041E\u0412\u0421\u041A  </span>\r\n       </th>\r\n    </ng-container>\r\n\r\n    <!-- <tr mat-header-row *matHeaderRowDef=\"columns$ | async\"   ></tr> -->\r\n    <tr mat-header-row *matHeaderRowDef=\"['header-row-first-group', 'header-row-second-group']\" class=\"fids-table-hyper-header-row\"></tr>\r\n    <tr mat-header-row *matHeaderRowDef=\"columns$ | async\"  class=\"fids-table-header-row\"></tr>\r\n    <!-- <tr mat-row  *matRowDef=\"let row; let i = index; columns:  columns$ | async ;\" [ngClass]=\"{'fids-table-row-0':(i%2==0), 'fids-table-row-1': !(i%2==0)}\" ></tr> -->\r\n    <tr mat-row  *matRowDef=\"let row; let i = index; columns:  columns$ | async ;\" \r\n          [ngClass]=\"{'ssptr-primary-lighter-text':(i%2==0), 'ssptr-primary-main-text': !(i%2==0) }\" \r\n          class=\"fids-table-row\" \r\n       \r\n    ></tr>\r\n  </table> \r\n\r\n  ", styles: [".fids-table{width:100%;table-layout:fixed;overflow:hidden}.fids-table-col{padding-left:.2vw;padding-right:.2vw}.mat-cell{padding-left:.2vw;border-bottom-width:0;text-align:left}.mat-header-cell span{padding-left:20px;font-size:120%}.mat-cell-Flight{white-space:pre-line}.mat-cell-Center{text-align:center;white-space:pre-line}.fids-table-header-row{height:30px!important}.fids-table-hyper-header-row{height:40px!important}.fids-table-row{height:2.4vh!important}.mat-column-CustCode{width:4vw}.mat-column-DestD,.mat-column-DestA,.mat-column-Trans{width:9vw}.header-caption-fids{display:flex;flex:1;flex-direction:column;width:100%}.header-caption-fids div{margin-left:auto;margin-right:auto}.header-sub-text-fids{font-size:14px;line-height:16px;height:16px;right:10px}.progress-fids{height:1px}.ejac-cnt{display:inline-block;vertical-align:middle}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AllReaderService }, { type: i2.ActivatedRoute }]; } });

class SsptrHandmadeSheduleModule {
}
SsptrHandmadeSheduleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: SsptrHandmadeSheduleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SsptrHandmadeSheduleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.11", ngImport: i0, type: SsptrHandmadeSheduleModule, declarations: [AppHandmadeSheduleComponent,
        EjaculationContainerComponent], imports: [CommonModule,
        SsptrFidsModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressBarModule] });
SsptrHandmadeSheduleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: SsptrHandmadeSheduleModule, imports: [CommonModule,
        SsptrFidsModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: SsptrHandmadeSheduleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AppHandmadeSheduleComponent,
                        EjaculationContainerComponent
                    ],
                    imports: [
                        CommonModule,
                        SsptrFidsModule,
                        MatIconModule,
                        MatTableModule,
                        MatToolbarModule,
                        MatProgressBarModule
                    ]
                }]
        }] });

/*
 * Public API Surface of ssptr-lib-tablo-component
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppHandmadeSheduleComponent, EjaculationContainerComponent, SsptrHandmadeSheduleModule };
//# sourceMappingURL=ssptr-lib-tablo-component.mjs.map
