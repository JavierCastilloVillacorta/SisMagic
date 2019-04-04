import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnavigatorComponent } from './component/web/cnavigator/cnavigator.component';
import { CcuerpoComponent } from './component/web/ccuerpo/ccuerpo.component';
import { FormsModule } from '@angular/forms';


/* Servicio web */
import { WebService } from './services/web/web.service';
/* Componentes web */
import { CinicioComponent } from './component/web/cinicio/cinicio.component';
import { CproductosComponent } from './component/web/cproductos/cproductos.component';
import { CcarritoComponent } from './component/web/ccarrito/ccarrito.component';
import { CcontactoComponent } from './component/web/ccontacto/ccontacto.component';
import { CloginComponent } from './component/web/clogin/clogin.component';

/* Servicios sistema */
import { SestablishmentsService } from './services/system/config/establishments/sestablishments.service';
import { WarehouseService } from './services/system/config/warehouse/warehouse.service';
import { SmenuService } from './services/system/config/menu/smenu.service';
import { ProductsService } from './services/system/config/products/products.service';
import { CategoriesService } from './services/system/config/categories/categories.service';
import { GasService } from './services/system/config/gas/gas.service';
import { BrandvehicleService } from './services/system/config/brandvehicle/brandvehicle.service';



/* Componentes Sistema */
import { CmenuComponent } from './component/system/cmenu/cmenu.component';
import { CestablecimientosComponent } from './component/system/config/cestablecimientos/cestablecimientos.component';
import { CbestableciminetosComponent } from './component/system/config/search/cbestableciminetos/cbestableciminetos.component';
import { ClestableciminetosComponent } from './component/system/config/list/clestableciminetos/clestableciminetos.component';
import { CfestableciminetosComponent } from './component/system/config/form/cfestableciminetos/cfestableciminetos.component';
import { ClwarehouseComponent } from './component/system/config/list/clwarehouse/clwarehouse.component';
import { CfwarehouseComponent } from './component/system/config/form/cfwarehouse/cfwarehouse.component';
import { CbwarehouseComponent } from './component/system/config/search/cbwarehouse/cbwarehouse.component';
import { CproductsComponent } from './component/system/config/cproducts/cproducts.component';
import { ClproductsComponent } from './component/system/config/list/clproducts/clproducts.component';
import { CbproductsComponent } from './component/system/config/search/cbproducts/cbproducts.component';
import { CfproductsComponent } from './component/system/config/form/cfproducts/cfproducts.component';
import { CfequivalencesComponent } from './component/system/config/form/cfequivalences/cfequivalences.component';
import { CbequivalencesComponent } from './component/system/config/search/cbequivalences/cbequivalences.component';
import { ClequivalencesComponent } from './component/system/config/list/clequivalences/clequivalences.component';
import { CfcategoriesComponent } from './component/system/config/form/cfcategories/cfcategories.component';
import { ClcategoriesComponent } from './component/system/config/list/clcategories/clcategories.component';
import { CbcategoriesComponent } from './component/system/config/search/cbcategories/cbcategories.component';
import { CfbrandsComponent } from './component/system/config/form/cfbrands/cfbrands.component';
import { ClbrandsComponent } from './component/system/config/list/clbrands/clbrands.component';
import { CbbrandsComponent } from './component/system/config/search/cbbrands/cbbrands.component';
import { CvehicleComponent } from './component/system/config/cvehicle/cvehicle.component';
import { CfvehicleComponent } from './component/system/config/form/cfvehicle/cfvehicle.component';
import { ClvehicleComponent } from './component/system/config/list/clvehicle/clvehicle.component';
import { CbvehicleComponent } from './component/system/config/search/cbvehicle/cbvehicle.component';
import { ClgasComponent } from './component/system/config/list/clgas/clgas.component';
import { CbgasComponent } from './component/system/config/search/cbgas/cbgas.component';
import { CfgasComponent } from './component/system/config/form/cfgas/cfgas.component';
import { ClbrandvehicleComponent } from './component/system/config/list/clbrandvehicle/clbrandvehicle.component';
import { CbbrandvehicleComponent } from './component/system/config/search/cbbrandvehicle/cbbrandvehicle.component';
import { CfbrandvehicleComponent } from './component/system/config/form/cfbrandvehicle/cfbrandvehicle.component';
import { ClenginevehicleComponent } from './component/system/config/list/clenginevehicle/clenginevehicle.component';
import { CbenginevehicleComponent } from './component/system/config/search/cbenginevehicle/cbenginevehicle.component';
import { CfenginevehicleComponent } from './component/system/config/form/cfenginevehicle/cfenginevehicle.component';
import { ClmodelvehicleComponent } from './component/system/config/list/clmodelvehicle/clmodelvehicle.component';
import { CbmodelvehicleComponent } from './component/system/config/search/cbmodelvehicle/cbmodelvehicle.component';
import { CfmodelvehicleComponent } from './component/system/config/form/cfmodelvehicle/cfmodelvehicle.component';
import { ClunitproductComponent } from './component/system/config/list/clunitproduct/clunitproduct.component';
import { CbunitproductComponent } from './component/system/config/search/cbunitproduct/cbunitproduct.component';
import { CfunitproductComponent } from './component/system/config/form/cfunitproduct/cfunitproduct.component';
import { ClpositionproductComponent } from './component/system/config/list/clpositionproduct/clpositionproduct.component';
import { CbpositionproductComponent } from './component/system/config/search/cbpositionproduct/cbpositionproduct.component';
import { CfpositionproductComponent } from './component/system/config/form/cfpositionproduct/cfpositionproduct.component';
import { ClsuperproductComponent } from './component/system/config/list/clsuperproduct/clsuperproduct.component';
import { CbsuperproductComponent } from './component/system/config/search/cbsuperproduct/cbsuperproduct.component';
import { CfsuperproductComponent } from './component/system/config/form/cfsuperproduct/cfsuperproduct.component';


/* Pipes System */
import { FilterPipe } from './pipes/system/config/filter.pipe';
import { FilterwarehousePipe } from './pipes/system/config/filterwarehouse.pipe';
import { FilterproductsPipe } from './pipes/system/config/filterproducts.pipe';
import { FiltercategoriesPipe } from './pipes/system/config/filtercategories.pipe';
import { FilterbrandProductPipe } from './pipes/system/config/filterbrand-product.pipe';
import { FiltergasPipe } from './pipes/system/config/filtergas.pipe';
import { FilterbrandVehiclePipe } from './pipes/system/config/filterbrand-vehicle.pipe';
import { FiltermodelVehiclePipe } from './pipes/system/config/filtermodel-vehicle.pipe';
import { FilterengineVehiclePipe } from './pipes/system/config/filterengine-vehicle.pipe';
import { FilterVehiclePipe } from './pipes/system/config/filter-vehicle.pipe';
import { FilterEquivalencePipe } from './pipes/system/config/filter-equivalence.pipe';
import { FilterunitProductPipe } from './pipes/system/config/filterunit-product.pipe';
import { FilterpositionProductPipe } from './pipes/system/config/filterposition-product.pipe';
import { FiltersuperProductPipe } from './pipes/system/config/filtersuper-product.pipe';
import { FiltercolourPipe } from './pipes/system/config/filtercolour.pipe';





@NgModule({
  declarations: [
    AppComponent,
    CnavigatorComponent,
    CcuerpoComponent,
    CinicioComponent,
    CproductosComponent,
    CcarritoComponent,
    CcontactoComponent,
    CloginComponent,
    CmenuComponent,
    CestablecimientosComponent,
    CbestableciminetosComponent,
    ClestableciminetosComponent,
    CfestableciminetosComponent,
    FilterPipe,
    ClwarehouseComponent,
    CfwarehouseComponent,
    CbwarehouseComponent,
    FilterwarehousePipe,
    CproductsComponent,
    ClproductsComponent,
    CbproductsComponent,
    CfproductsComponent,
    FilterproductsPipe,
    CfequivalencesComponent,
    CbequivalencesComponent,
    ClequivalencesComponent,
    CfcategoriesComponent,
    ClcategoriesComponent,
    CbcategoriesComponent,
    CfbrandsComponent,
    ClbrandsComponent,
    CbbrandsComponent,
    CvehicleComponent,
    CfvehicleComponent,
    ClvehicleComponent,
    CbvehicleComponent,
    FiltercategoriesPipe,
    FilterbrandProductPipe,
    ClgasComponent,
    CbgasComponent,
    CfgasComponent,
    FiltergasPipe,
    ClbrandvehicleComponent,
    CbbrandvehicleComponent,
    CfbrandvehicleComponent,
    FilterbrandVehiclePipe,
    ClmodelvehicleComponent,
    CbmodelvehicleComponent,
    CfmodelvehicleComponent,
    FiltermodelVehiclePipe,
    ClenginevehicleComponent,
    CbenginevehicleComponent,
    CfenginevehicleComponent,
    FilterengineVehiclePipe,
    FilterVehiclePipe,
    FilterEquivalencePipe,
    ClunitproductComponent,
    CbunitproductComponent,
    CfunitproductComponent,
    FilterunitProductPipe,
    ClpositionproductComponent,
    CbpositionproductComponent,
    CfpositionproductComponent,
    FilterpositionProductPipe,
    ClsuperproductComponent,
    CbsuperproductComponent,
    CfsuperproductComponent,
    FiltersuperProductPipe,
    FiltercolourPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    WebService,
    SestablishmentsService,
    WarehouseService,
    ProductsService,
    CategoriesService,
    GasService,
    BrandvehicleService,
    SmenuService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
