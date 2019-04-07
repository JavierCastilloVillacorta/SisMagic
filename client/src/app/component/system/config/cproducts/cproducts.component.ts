import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/system/config/categories/categories.service';
import { BrandsProducts } from 'src/app/models/brandsProduct';
import { BrandsService } from 'src/app/services/system/config/brands/brands.service';
import { Equivalences } from 'src/app/models/equivalences';
import { EquivalencesService } from 'src/app/services/system/config/equivalences/equivalences.service';
import { UnitProduct } from 'src/app/models/unitProduct';
import { UnitproductService } from 'src/app/services/system/config/unitproduct/unitproduct.service';
import { PositionProduct } from 'src/app/models/positionproduct';
import { PositionproductService } from 'src/app/services/system/config/positionproduct/positionproduct.service';
import { SuperProduct } from 'src/app/models/superProduct';
import { SuperproductService } from 'src/app/services/system/config/superproduct/superproduct.service';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/system/config/products/products.service';
import { VehicleProduct } from 'src/app/models/vehicleProduct';
import { VehicleproductService } from 'src/app/services/system/config/vehicleproduct/vehicleproduct.service';
import { EquivalenceProduct } from 'src/app/models/equivalenceProduct';
import { EquivalenceproductService } from 'src/app/services/system/config/equivalenceproduct/equivalenceproduct.service';
import { GalleryProduct } from 'src/app/models/galleryProduct';
import { GalleryproductService } from 'src/app/services/system/config/galleryproduct/galleryproduct.service';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';
import { BrandvehicleService } from 'src/app/services/system/config/brandvehicle/brandvehicle.service';
import { Vehicles } from 'src/app/models/vehicles';
import { VehicleService } from 'src/app/services/system/config/vehicle/vehicle.service';
import { Gas } from 'src/app/models/gas';
import { ModelVehicle } from 'src/app/models/modelVehicle';
import { EngineVehicle } from 'src/app/models/engineVehicle';
import { GasService } from 'src/app/services/system/config/gas/gas.service';
import { ModelvehicleService } from 'src/app/services/system/config/modelvehicle/modelvehicle.service';
import { EnginevehicleService } from 'src/app/services/system/config/enginevehicle/enginevehicle.service';

@Component({
  selector: 'app-cproducts',
  templateUrl: './cproducts.component.html',
  styleUrls: ['./cproducts.component.css']
})
export class CproductsComponent implements OnInit {
  
  //Click Menu
  menuProd = true;
  menuEquiv = false;
  menuUnid =false;
  menuPosi = false;
  menuSup = false;
  menuCate = false;
  menuBrand = false;

  // variables Json
  jsonCategory: Category[] = [];
  jsonBrandsProduct: BrandsProducts[] =[];
  jsonEquivalences : Equivalences[] = [];
  jsonEquivalencesForm : Equivalences[] = [];
  jsonVehicle : Vehicles[]= [];
  jsonVehicleForm : Vehicles[]= [];
  jsonUnitProduct: UnitProduct[] = [];
  jsonPositionProduct: PositionProduct[] = [];
  jsonSuperProduct: SuperProduct[] = [];
  jsonBrandVehicle: BrandsVehicle[] = [];


  jsonGas : Gas[] = [];
  jsonModelVehicle: ModelVehicle[] = [];
  jsonEngineVehicle: EngineVehicle[] = [];

  // ----------------------------------
  jsonProduct: Product[] = [];
  jsonVehicleProduct: VehicleProduct[] = [];
  jsonEquivalenceProduct: EquivalenceProduct[] = [];
  jsonGalleryProduct: GalleryProduct[] = [];

  // Filtro Lista
  filterCat = "";
  filterBrandText = "";
  filterEquivalencestext = "";
  filterUnitProductText = "";
  filterPositionProductText = "";
  filterSuperProductText = "";
  filterProductText = "";


  constructor(
    private categoriesService: CategoriesService,
    private brandsService: BrandsService,
    private equivalencesService: EquivalencesService,
    private unitproductService:UnitproductService,
    private positionproductService: PositionproductService,
    private superproductService: SuperproductService,
    private vehicleService:VehicleService,

    private brandvehicleService: BrandvehicleService,
    private gasService: GasService,
    private modelvehicleService: ModelvehicleService,
    private enginevehicleService: EnginevehicleService,

    //-----------------------
    private productsService: ProductsService,
    private vehicleproductService: VehicleproductService,
    private equivalenceproductService: EquivalenceproductService,
    private galleryproductService: GalleryproductService
  ) { }

  ngOnInit() {
    this.jsonCategory = this.categoriesService.jsonCategory;
    this.jsonBrandsProduct = this.brandsService.jsonBrandsProduct;
    this.jsonEquivalences = this.equivalencesService.jsonEquivalences;
    this.jsonEquivalencesForm = this.equivalencesService.jsonEquivalences;
    this.jsonUnitProduct = this.unitproductService.jsonUnitProduct;
    this.jsonPositionProduct = this.positionproductService.jsonPositionProduct;
    this.jsonSuperProduct = this.superproductService.jsonSuperProduct;
    this.jsonVehicle = this.vehicleService.jsonVehicle;
    this.jsonVehicleForm = this.vehicleService.jsonVehicle;
    this.jsonBrandVehicle = this.brandvehicleService.jsonBrandVehicle;

    this.jsonGas = this.gasService.jsonGas;
    this.jsonModelVehicle = this.modelvehicleService.jsonModelVehicle;
    this.jsonEngineVehicle = this.enginevehicleService.jsonEngineVehicle;
  
    //-----------------------
    this.jsonProduct = this.productsService.jsonProduct;
    this.jsonVehicleProduct = this.vehicleproductService.jsonVehicleProduct;
    this.jsonEquivalenceProduct = this.equivalenceproductService.jsonEquivalenceProduct
    this.jsonGalleryProduct = this.galleryproductService.jsonGalleryProduct;
    this.jsonNewProduct(this.jsonCategory,this.jsonBrandsProduct,this.jsonUnitProduct,this.jsonPositionProduct,this.jsonSuperProduct,this.jsonBrandVehicle,this.jsonProduct);
    this.jsonNewVehicle(this.jsonGas, this.jsonBrandVehicle, this.jsonModelVehicle, this.jsonEngineVehicle, this.jsonVehicle);

   
  }

  storeTotal = [];

  jsonNewVehicle(jsonGas, jsonBrandVehicle, jsonModelVehicle, jsonEngineVehicle, jsonVehicle){

    jsonVehicle.map(x => Object.assign(x, jsonGas.find(y => y.idGas == x.idGas)));
    jsonVehicle.map(x => Object.assign(x, jsonBrandVehicle.find(y => y.idBrandV == x.idBrandV)));
    jsonVehicle.map(x => Object.assign(x, jsonModelVehicle.find(y => y.idModel == x.idModel)));
    jsonVehicle.map(x => Object.assign(x, jsonEngineVehicle.find(y => y.idEngine == x.idEngine)));

  }

  

  jsonNewProduct(jsonCategory,jsonBrandsProduct,jsonUnitProduct,jsonPositionProduct,jsonSuperProduct,jsonBrandVehicle,jsonProduct){
  
    jsonProduct.map(x => Object.assign(x, jsonCategory.find(y => y.idCategory == x.idCategory)));
    jsonProduct.map(x => Object.assign(x, jsonBrandsProduct.find(y => y.idBrand == x.idBrand)));
    jsonProduct.map(x => Object.assign(x, jsonUnitProduct.find(y => y.idUnity == x.idUnity)));
    jsonProduct.map(x => Object.assign(x, jsonPositionProduct.find(y => y.idPosition == x.idPosition)));
    jsonProduct.map(x => Object.assign(x, jsonSuperProduct.find(y => y.idSuper == x.idSuper)));
    jsonProduct.map(x => Object.assign(x, jsonBrandVehicle.find(y => y.idBrand_v == x.idBrand_v)));

  }




  //Buscadores
  //Categorias
  searchCatText($event){
    this.filterCat = $event;
  }
  //Marca Productos
  searchBrandProductText($event){
    this.filterBrandText = $event;
  }
  //Equivalencias Productos
  searchEquivalenceText($event){
    this.filterEquivalencestext = $event;
  }
  // Unidad Producto
  searchUnitProductText($event){
    this.filterUnitProductText = $event;
  }
  // Posicion Producto
  searchPositionProduct($event){
    this.filterPositionProductText = $event;
  }
  //Super Productos
  searchSuperProductText($event){
    this.filterSuperProductText = $event;
  }
  //Productos
  newfilterProductText = ""
  searchProductText($event){
    this.filterProductText = $event;    
    this.newfilterProductText = $event;    
  }



  //Click Listados
  //Categorias
  clickOupListCat($event){
    $event.btnName = "Modificar";
    this.datosCategory = $event;
  }
  //Marcas productos
  clickOupBrProduct($event){
    $event.btnName = "Modificar";
    this.datosbrandProduct = $event;
  }
  //Equivalencias Productos
  clickOupListEquivalences($event){
    $event.btnName = "Modificar";
    this.datosEquivalences = $event;
  }
  //Unidad Producto
  clickOupListUnitProduct($event){
    $event.btnName = "Modificar";
    this.datosUnitProduct = $event;
  }
  //Posicion Producto
  clickOupListPositionProduct($event){
    $event.btnName = "Modificar";
    this.datosPositionProduct = $event;
  }
  //Super Producto
  clickOupSuperProduct($event){
    $event.btnName = "Modificar";
    this.datosSuperProduct = $event;
  }
  // Productos 
  clickOupListProduct($event){

    this.datosVehicleNewProduct = [];
    this.datosEquivalenceProduct = [];
    this.datosGalleryProduct = [];

    $event.btnName = "Modificar";
    this.datosProduct = $event;

    //Datos Vehiculo
    for (var i = 0; i < this.jsonVehicleProduct.length ; i++) {
      if (this.jsonVehicleProduct[i].idProduct === $event.idProduct) {
        this.datosVehicleNewProduct.push(this.jsonVehicleProduct[i]);
        this.datosVehicleNewProduct.map(x => Object.assign(x, this.jsonVehicle.find(y => y.idVehicle == x.idVehicle)));
      }
    }
  

    //Datos equivalencias
    
    for (var i = 0; i < this.jsonEquivalenceProduct.length ; i++) {
      if (this.jsonEquivalenceProduct[i].idProduct === $event.idProduct) {
        this.datosEquivalenceProduct.push(this.jsonEquivalenceProduct[i]);
        this.datosEquivalenceProduct.map(x => Object.assign(x, this.jsonEquivalences.find(y => y.idEquivalence == x.idEquivalence)));

        
      }
    }

    //Datos Galeria
    for (var i = 0; i < this.jsonGalleryProduct.length ; i++) {
      if (this.jsonGalleryProduct[i].idProduct === $event.idProduct) {
        this.datosGalleryProduct.push(this.jsonGalleryProduct[i]);
      }
    }

    alert("Listado");
  }

  clickOupCopyProduct1($event){    

    
    
    
    
    this.datosProduct = Object.assign($event);



    $event.idProduct = 0;
    $event.btnName = "Guardar";
    $event.newCodeProduct = "";
    $event.codBarProduct = "";
    $event.measureProduct = "";
    $event.descriptionProduct = "";
    $event.stateProduct  = 1;
    $event.alternatingProduct = "";
    $event.referenceA = "";
    $event.referenceB = "";
    $event.referenceC = "";
    $event.referenciaTypeProduct = "";
    $event.idPosition = 0;
    $event.namePosition = "";
    $event.nameUnity = "";
    $event.idUnity = 0;
    $event.priceProduct = "";
    $event.idSuper = 0;
    $event.nameSuper = "";

    this.datosVehicleNewProduct = [];
    this.datosEquivalenceProduct = [];
    this.datosGalleryProduct = [];


    
    //this.datosProduct = $event;
    
    alert("Producto 01");
  }

  clickOupCopyProduct2($event){
    $event.btnName = "Guardar";

    $event.newCodeProduct = "";
    $event.codBarProduct = "";
    $event.measureProduct = "";
    $event.descriptionProduct = "";
    $event.stateProduct  = 1;
    $event.alternatingProduct = "";
    $event.referenceA = "";
    $event.referenceB = "";
    $event.referenceC = "";
    $event.referenciaTypeProduct = "";
    $event.idPosition = 0;
    $event.namePosition = "";
    $event.priceProduct = "";


    this.datosVehicleNewProduct = [];
    this.datosEquivalenceProduct = [];
    this.datosGalleryProduct = [];

    this.datosProduct = $event;
    alert("Producto 02");
  }

  clickOupCopyProduct3($event){
    $event.btnName = "Guardar";
    $event.newCodeProduct = "";
    $event.codBarProduct = "";
    $event.measureProduct = "";
    $event.descriptionProduct = "";
    $event.stateProduct  = 1;
    $event.alternatingProduct = "";
    $event.referenceA = "";
    $event.referenceB = "";
    $event.referenceC = "";
    $event.referenciaTypeProduct = "";
    $event.priceProduct = "";

    this.datosProduct = $event;

    this.datosVehicleNewProduct = [];
    this.datosEquivalenceProduct = [];
    this.datosGalleryProduct = [];

    //Datos Vehiculo porducto nivel 3

    for (var i = 0; i < this.jsonVehicleProduct.length ; i++) {
      if (this.jsonVehicleProduct[i].idProduct === $event.idProduct) {
        this.datosVehicleNewProduct.push(this.jsonVehicleProduct[i]);
        this.datosVehicleNewProduct.map(x => Object.assign(x, this.jsonVehicle.find(y => y.idVehicle == x.idVehicle)));
      }
    }
  

    //Datos equivalencias porducto nivel 3
    
    for (var i = 0; i < this.jsonEquivalenceProduct.length ; i++) {
      if (this.jsonEquivalenceProduct[i].idProduct === $event.idProduct) {
        this.datosEquivalenceProduct.push(this.jsonEquivalenceProduct[i]);
        this.datosEquivalenceProduct.map(x => Object.assign(x, this.jsonEquivalences.find(y => y.idEquivalence == x.idEquivalence)));

        
      }
    }

    //Datos Galeria porducto nivel 3

    for (var i = 0; i < this.jsonGalleryProduct.length ; i++) {
      if (this.jsonGalleryProduct[i].idProduct === $event.idProduct) {
        this.datosGalleryProduct.push(this.jsonGalleryProduct[i]);
      }
    }

    alert("Producto 03");
  }

  clickOupCopyProEquivalence($event){
    $event.btnName = "Guardar";
    this.datosProduct = $event;
    alert("Equivalencias");
  }

  clickOupCopyProVehicle($event){
    $event.btnName = "Guardar";
    this.datosProduct = $event;
    alert("Vehiculo");
  }

  clickOupCopyProGallery($event){
    $event.btnName = "Guardar";
    this.datosProduct = $event;
    alert("Galeria");
  }

  


  //Click Nuevo Formularios
  datosCategory : Category[] = [];
  datosbrandProduct : BrandsProducts[] =[];
  datosEquivalences : Equivalences[] = [];
  datosUnitProduct : UnitProduct[] = [];
  datosPositionProduct : PositionProduct[] = [];
  datosSuperProduct : SuperProduct[] = [];
  datosProduct : Product[] = [];

  datosVehicleNewProduct: VehicleProduct[] = [];
  datosEquivalenceProduct: EquivalenceProduct[] = [];
  datosGalleryProduct: GalleryProduct[] = [];



  //categoria
  newFormCategory($event){
    $event.btnName = "Guardar";
    $event.stateCategory = 1;
    this.datosCategory = $event;
  }
  //Marca Producto
  newFormBrandProduct($event){
    $event.btnName = "Guardar";
    $event.stateBrand = 1;
    this.datosbrandProduct = $event;
  }
  //Equivalencias Productos
  newFormEquivalence($event){
    $event.btnName = "Guardar";
    $event.stateEquivalence = 1;
    this.datosEquivalences = $event;
  }
  //Unidad Producto
  newFormUnitProduct($event){
    $event.btnName = "Guardar";
    this.datosUnitProduct = $event;
  }
  // Posicion Producto
  newFormPositionProduct($event){
    $event.btnName = "Guardar";
    this.datosPositionProduct = $event;
  }
  // Super Producto
  newFormSuperProduct($event){
    $event.btnName = "Guardar";
    $event.stateSuper = 1;
    this.datosSuperProduct = $event;
  }
  // Productos
  newFormProduct($event){
    $event.btnName = "Guardar";
    $event.nameBrandV = "";
    $event.nameCategory = "";
    $event.namePosition = "";
    $event.nameSuper = "";
    $event.nameBrand = "";
    $event.nameUnity = "";
    $event.stateProduct  = 1;
    $event.idTypeProduct = 1;

    this.datosVehicleNewProduct = [];
    this.datosEquivalenceProduct = [];
    this.datosGalleryProduct = [];

    this.datosProduct = $event;
    alert("Nuevo product")
  }

  //Click Guardar Formulario
  //Categoria
  saveCategory($event){
    this.jsonCategory = this.jsonCategory.concat($event);
  }
  //Marca Producto
  saveBrandProduct($event){
    this.jsonBrandsProduct = this.jsonBrandsProduct.concat($event);
  }
  //Equivalencias Productos
  saveEquivalences($event){
    this.jsonEquivalences = this.jsonEquivalences.concat($event);
  }
  //Unidad Producto
  saveUnitProduct($event){
    this.jsonUnitProduct = this.jsonUnitProduct.concat($event);
  }
  //Posicion Producto
  savePositionProduct($event){
    this.jsonPositionProduct = this.jsonPositionProduct.concat($event);
  }
  // Super Producto
  saveSuperProduct($event){
    this.jsonSuperProduct = this.jsonSuperProduct.concat($event)
  }

  // Producto

  saveProduct($event){
    this.jsonProduct = this.jsonProduct.concat($event);
    this.jsonNewProduct(this.jsonCategory,this.jsonBrandsProduct,this.jsonUnitProduct,this.jsonPositionProduct,this.jsonSuperProduct,this.jsonBrandVehicle,this.jsonProduct);
  }

  saveEquivalenceProduct($event){
    console.log("Equivalencias");
    
    console.log($event);
    
    this.jsonEquivalenceProduct = this.jsonEquivalenceProduct.concat($event);
    console.log(this.jsonEquivalenceProduct);
    
  }

  $saveVehicleProduct($event){
    console.log("Eventos");
    
    console.log($event);
    this.jsonVehicleProduct = this.jsonVehicleProduct.concat($event);
    console.log(this.jsonVehicleProduct);
  }



  //Click Menu
  menuProduct(){
    this.menuProd = true;
    this.menuEquiv = false;
    this.menuUnid =false;
    this.menuPosi = false;
    this.menuSup = false;
    this.menuCate = false;
    this.menuBrand = false;
  }

  menuEquivalences(){
    this.menuProd = false;
    this.menuEquiv = true;
    this.menuUnid =false;
    this.menuPosi = false;
    this.menuSup = false;
    this.menuCate = false;
    this.menuBrand = false;
  }

  menuUnidad(){
    this.menuProd = false;
    this.menuEquiv = false;
    this.menuUnid =true;
    this.menuPosi = false;
    this.menuSup = false;
    this.menuCate = false;
    this.menuBrand = false;
  }

  menuPosicion(){
    this.menuProd = false;
    this.menuEquiv = false;
    this.menuUnid =false;
    this.menuPosi = true;
    this.menuSup = false;
    this.menuCate = false;
    this.menuBrand = false;
  }

  menuSuper(){
    this.menuProd = false;
    this.menuEquiv = false;
    this.menuUnid =false;
    this.menuPosi = false;
    this.menuSup = true;
    this.menuCate = false;
    this.menuBrand = false;
  }

  menuCategory(){
    this.menuProd = false;
    this.menuEquiv = false;
    this.menuUnid =false;
    this.menuPosi = false;
    this.menuSup = false;
    this.menuCate = true;
    this.menuBrand = false;
  }

  menuBrands(){
    this.menuProd = false;
    this.menuEquiv = false;
    this.menuUnid =false;
    this.menuPosi = false;
    this.menuSup = false;
    this.menuCate = false;
    this.menuBrand = true;
  }

}
