import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equivalences } from 'src/app/models/equivalences';
import { Product } from 'src/app/models/products';
import { Vehicles } from 'src/app/models/vehicles';
import { GalleryProduct } from 'src/app/models/galleryProduct';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';

@Component({
  selector: 'app-cfproducts',
  templateUrl: './cfproducts.component.html',
  styleUrls: ['./cfproducts.component.css']
})
export class CfproductsComponent implements OnInit {

  //Json Datos
  @Input() jsonProduct;
  @Input() datosProduct;
  @Input() jsonBrandVehicle;
  @Input() jsonCategory;
  @Input() jsonPositionProduct;
  @Input() jsonSuperProduct;
  @Input() jsonBrandsProduct;
  @Input() jsonUnitProduct;
  //equivalencias
  @Input() datosEquivalenceProduct;
  @Input() jsonEquivalencesForm;
  @Input() jsonEquivalenceProduct;
  //vehiculos (Aplicaciones)
  @Input() datosVehicleNewProduct;
  @Input() jsonVehicleForm;
  @Input() jsonVehicleProduct;
  
  //Galerias
  @Input() datosGalleryProduct;
  @Input() jsonGalleryProduct;

  // Envio de formularios
  @Output() saveProduct = new EventEmitter<any>();

  // variables modales
  valModalEquivalence =false;
  valModalVehicle = false;
  valModalGallery = false;
  newJsonEquivalencesForm = [];
  newJsonVehiclesForm = [];
  newjsonGalleryForm = [];

  filterModalEquivalenceModal = "";
  filterModalproEquivalenceModal = "";
  newFilterModalproEquivalenceModal = [{search:""}];

  filterModalVehicleModal = "";
  filterModalproVehicleModal = "";
  newFilterModalproVehicleModal = [{search:""}];

  filterModalproGalleryModal = "";
  newFilterModalproGalleryModal= [{search:""}];
  imgpreviewProduct = "";
  imgpreview = "";

  img0 = ""
  img1 = ""
  img2 = ""
  img3 = ""


  // val Formulario
  validForm = true;
  valNameBrandV = true;
  valNameCategory = true;
  valNamePosition = true;
  valNameSuper = true;
  valNameBrand = true;
  valNameUnity = true;


  valMeasureProduct = true;
  valAlternatingProduct = true;


  //Abrir Autocomplet
  menuBrandVehicle = false;
  menuCatProduct = false;
  menuPosProduct = false;
  menuSuperProduct = false;
  menuBrandProduct = false;
  menuUnitProduct = false;

  product: Product [] = [];

  newCodeProduct = "";


  constructor() { }

  ngOnInit() {
    this.resetInputs();
    this.newJsonEquivalencesForm = JSON.parse(JSON.stringify(this.jsonEquivalencesForm));
    this.newJsonVehiclesForm = JSON.parse(JSON.stringify(this.jsonVehicleForm));   
  }

  resetInputs(){
    this.datosProduct = [];
    this.datosProduct.nameBrandV = "";
    this.datosProduct.nameCategory = "";
    this.datosProduct.namePosition = "";
    this.datosProduct.nameSuper = "";
    this.datosProduct.nameBrand = "";
    this.datosProduct.nameUnity = "";

    this.datosProduct.stateProduct  = 1;
    this.datosProduct.idTypeProduct = 1;
    this.datosProduct.btnName = "Guardar";

    //Img Default
    //this.datosGalleryProduct.imageStore = "../assets/img/img-default.jpg";




  }

  // Form Guardar
  onSaveProduct(){
    this.validForm = this.valForm();
    
    if(this.validForm){
      if(this.datosProduct.btnName){
        this.datosProduct.idProduct =  1;
        this.product=[{
          idProduct: this.datosProduct.idProduct,
          newCodeProduct: this.datosProduct.newCodeProduct,
          codBarProduct: this.datosProduct.codBarProduct,
          descriptionProduct: this.datosProduct.descriptionProduct,
          measureProduct: this.datosProduct.measureProduct,
          stateProduct: this.datosProduct.stateProduct,
          idCategory: this.datosProduct.idCategory,
          idBrand: this.datosProduct.idBrand,
          idUnity: this.datosProduct.idUnity,
          idTypeProduct: this.datosProduct.idTypeProduct,
          idBrandV: this.datosProduct.idBrandV,
          idPosition: this.datosProduct.idPosition,
          idSuper: this.datosProduct.idSuper,
          priceProduct: this.datosProduct.priceProduct,
          alternatingProduct: this.datosProduct.alternatingProduct,
          referenceA: this.datosProduct.referenceA,
          referenceB: this.datosProduct.referenceB,
          referenceC: this.datosProduct.referenceC,
          referenciaTypeProduct: this.datosProduct.referenciaTypeProduct

        }]
        this.saveProduct.emit(this.product);
        this.resetInputs();


        alert("guardar")

      }else{
        alert("Modificar")
      }
    }


  }

  // Validar Formulario
  valForm(){

    if(this.datosProduct.measureProduct == undefined || this.datosProduct.measureProduct == ""){
      this.valMeasureProduct = false;
    }else{
      this.valMeasureProduct = true;
    }

    if(this.datosProduct.idCategory == undefined || this.datosProduct.idCategory == ""){
      this.valNameCategory = false;
    }else{
      this.valNameCategory = true;
    }

    if(this.datosProduct.idBrand == undefined || this.datosProduct.idBrand == ""){
      this.valNameBrand = false;
    }else{
      this.valNameBrand = true;
    }

    if(this.datosProduct.idUnity == undefined || this.datosProduct.idUnity == ""){
      this.valNameUnity = false;
    }else{
      this.valNameUnity = true;
    }

    if(this.datosProduct.idBrandV == undefined || this.datosProduct.idBrandV == ""){
      this.valNameBrandV = false;
    }else{
      this.valNameBrandV = true;
    }

    if(this.datosProduct.idPosition == undefined || this.datosProduct.idPosition == ""){
      this.valNamePosition = false;
    }else{
      this.valNamePosition = true;
    }

    if(this.datosProduct.idSuper == undefined || this.datosProduct.idSuper == ""){
      this.valNameSuper = false;
    }else{
      this.valNameSuper = true;
    }

    if(this.datosProduct.alternatingProduct == undefined || this.datosProduct.alternatingProduct == ""){
      this.valAlternatingProduct = false;
    }else{
      this.valAlternatingProduct = true;
    }

    if (this.valMeasureProduct == true && this.valNameCategory == true && 
        this.valNameBrand == true && this.valNameUnity == true && 
        this.valNameBrandV == true && this.valNamePosition == true &&
        this.valNameSuper == true && this.valAlternatingProduct == true
      ) {
      return true;
    }else{
      return false;
    }
  
    


  }


  //Letra Buscar Autocompletar
  rescatadatoNameBrand(brandVehicle){
    this.datosProduct.nameBrandV = brandVehicle.nameBrandV;
    this.datosProduct.idBrandV = brandVehicle.idBrandV;
    this.menuBrandVehicle = !this.menuBrandVehicle;
  }

  rescatadatoNameCategory(brandVehicle){
    this.datosProduct.nameCategory = brandVehicle.nameCategory;
    this.datosProduct.idCategory = brandVehicle.idCategory;
    this.menuCatProduct = !this.menuCatProduct;
  }

  rescatadatoPositionProduct(positionProduct){
    this.datosProduct.namePosition = positionProduct.namePosition;
    this.datosProduct.idPosition = positionProduct.idPosition;
    this.menuPosProduct = !this.menuPosProduct;
  }
  PositionkeyUp(){
    const index = this.jsonPositionProduct.indexOf(this.jsonPositionProduct.namePosition);
    this.datosProduct.namePosition = this.jsonPositionProduct[index].namePosition;
    this.datosProduct.idPosition = this.jsonPositionProduct[index].namePosition;

    console.log(index);
    console.log(this.datosProduct.namePosition);
    console.log(this.datosProduct.idPosition);
    
    

  }

  rescatadatoSuperProduct(superProduct){
    this.datosProduct.nameSuper = superProduct.nameSuper;
    this.datosProduct.idSuper = superProduct.idSuper;
    this.menuSuperProduct = !this.menuSuperProduct;
  }

  rescatadatoBrandProduct(brandProduct){
    this.datosProduct.nameBrand = brandProduct.nameBrand;
    this.datosProduct.idBrand = brandProduct.idBrand;
    this.menuBrandProduct = !this.menuBrandProduct;
  }

  rescatadatoUnitProduct(unitProduct){
    this.datosProduct.nameUnity = unitProduct.nameUnity;
    this.datosProduct.idUnity = unitProduct.idUnity;
    this.menuUnitProduct = !this.menuUnitProduct;
  }




  //Cerrar Autocomplet
  toAutoCompBrandVehicle(){
    this.menuBrandVehicle = this.cerrarmenu(this.menuBrandVehicle);
  }

  toAutoCompCatProduct(){
    this.menuCatProduct = this.cerrarmenu(this.menuCatProduct);
  }

  toAutoCompPosProduct(){
    this.menuPosProduct = this.cerrarmenu(this.menuPosProduct);
  }

  toAutoCompSuperProduct(){
    this.menuSuperProduct = this.cerrarmenu(this.menuSuperProduct);
  }

  toAutoCompBrandProduct(){
    this.menuBrandProduct = this.cerrarmenu(this.menuBrandProduct);
  }

  toAutoCompUnitProduct(){
    this.menuUnitProduct = this.cerrarmenu(this.menuUnitProduct);
  }

  cerrarmenu(estado){
    
    this.menuCatProduct = this.menuPosProduct = false;
    this.menuSuperProduct = this.menuBrandVehicle = false;
    this.menuBrandProduct  = this.menuUnitProduct = false;

    return (!estado);

  }



  //Cerrar evento escape
  onKeydown(event){
    if(event.key === "Escape"){
      this.cerrarmenu(true);
    }
  }

  //MODALES

  modalEquivalence(){
    this.valModalEquivalence = !this.valModalEquivalence;
  }
  modalVehicle(){
    this.valModalVehicle = !this.valModalVehicle;
  }
  modalGallery(){
    this.valModalGallery = !this.valModalGallery;
    this.newimgAddGallery();
  }

  // Buscador Modales
  // Equivalencia
  searchEquivalenceProdModal(){
    this.newFilterModalproEquivalenceModal = [];
    this.newFilterModalproEquivalenceModal.push({search: this.filterModalproEquivalenceModal});
  }

  searchEquivalenceModal(){
    this.filterModalEquivalenceModal;
  }
  //Vehiculos
  searchVehicleProdModal(){
    this.newFilterModalproVehicleModal = [];
    this.newFilterModalproVehicleModal.push({search: this.filterModalproVehicleModal});
  }

  searchVehicledModal(){
    this.filterModalVehicleModal;
  }

  //Galerias
  searchGalleryProdModal(){
    this.newFilterModalproGalleryModal = [];
    this.newFilterModalproGalleryModal.push({search: this.filterModalproGalleryModal});
  }

  // Agregar Items 
  //Equivalencias
  AddEquivalence(jsequivalence: Equivalences){
    const index = this.newJsonEquivalencesForm.indexOf(jsequivalence);
    this.newJsonEquivalencesForm.splice(index, 1);
    this.datosEquivalenceProduct.push(jsequivalence)
  }

  //Vehicullos
  AddVehicle(jsvehicleForm: Vehicles){
    const index = this.newJsonVehiclesForm.indexOf(jsvehicleForm);
    this.newJsonVehiclesForm.splice(index, 1);
    this.datosVehicleNewProduct.push(jsvehicleForm)
  }

  // Galerias
  addGallery(galleryProduct: GalleryProduct){
    if(this.datosGalleryProduct.length < 4){
      this.datosGalleryProduct.push(galleryProduct)
      this.newimgAddGallery();  
    }else{
      alert("Imagenes Completas");
    }
  }

  newimgAddGallery(){
    
    this.img0 = this.img1 = this.img2 = this. img3= ""

    
    for (let index = 0; index < this.datosGalleryProduct.length; index++) {
      switch (index) {
        case 0:
          this.img0 = this.datosGalleryProduct[0].urlGallery;
          break;
        case 1:
          this.img1 = this.datosGalleryProduct[1].urlGallery;
          break;
      
        case 2:
          this.img2 = this.datosGalleryProduct[2].urlGallery;
          break;

        case 3:
          this.img3 = this.datosGalleryProduct[3].urlGallery;
          break;
   
      }
       
     } 
  }

  viewGallery(galleryProduct: GalleryProduct){
    this.imgpreviewProduct = galleryProduct.urlGallery;
  }

  viewGalleryPincipal(imgprincipal){
    this.imgpreview = imgprincipal;
  }


  // Agregar datos de Producto
  //Equivalences
  equivalenceProductModal(jsProduct: Product){
    this.newJsonEquivalencesForm = [];
    for (var i = 0; i < this.jsonEquivalenceProduct.length ; i++) {
      if (this.jsonEquivalenceProduct[i].idProduct === jsProduct.idProduct) {
        this.newJsonEquivalencesForm.push(this.jsonEquivalenceProduct[i]);
        this.newJsonEquivalencesForm.map(x => Object.assign(x, this.jsonEquivalencesForm.find(y => y.idEquivalence == x.idEquivalence)));
      }
    }
  }
  // Vehiculos
  vehicleProductModal(jsProduct: Product){
    this.newJsonVehiclesForm = [];
    for (var i = 0; i < this.jsonVehicleProduct.length ; i++) {
      if (this.jsonVehicleProduct[i].idProduct === jsProduct.idProduct) {
        this.newJsonVehiclesForm.push(this.jsonVehicleProduct[i]);
        this.newJsonVehiclesForm.map(x => Object.assign(x, this.jsonVehicleForm.find(y => y.idVehicle == x.idVehicle)));
      }
    }
  

  }

  //Galerias
  GalleryProductModal(jsProduct: Product){
    this.newjsonGalleryForm = [];
    for (var i = 0; i < this.jsonGalleryProduct.length ; i++) {
      if (this.jsonGalleryProduct[i].idProduct === jsProduct.idProduct) {
        this.newjsonGalleryForm.push(this.jsonGalleryProduct[i]);
      }
    }

  }


  // Recargar
  reloadEquivalence(){
    this.newJsonEquivalencesForm = [];
    this.newJsonEquivalencesForm = JSON.parse(JSON.stringify(this.jsonEquivalencesForm));
  }

  reloadVehicle(){
    this.newJsonVehiclesForm = [];
    this.newJsonVehiclesForm = JSON.parse(JSON.stringify(this.jsonVehicleForm));
  }

   // Eliminar
   //Equivalencia
   RemoveEquivalence(equivalenceProduct:Equivalences){
    const index = this.datosEquivalenceProduct.indexOf(equivalenceProduct);
    this.datosEquivalenceProduct.splice(index, 1);
    this.newJsonEquivalencesForm.push(equivalenceProduct)
   } 

   RemoveVehicle(vehicleProduct: Vehicles){
    const index = this.datosVehicleNewProduct.indexOf(vehicleProduct);
    this.datosVehicleNewProduct.splice(index, 1);
    this.newJsonVehiclesForm.push(vehicleProduct);
   }


   // Imagenes Independientes
   brandsVehicle : BrandsVehicle [] = [];
   fileToUpload: File = null;
 
  // img0
   handleFileInput0(file: FileList){
    if(this.datosGalleryProduct.length < 4){
      this.RemoveImg0();
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) =>{
        this.img0= event.target.result;
        this.datosGalleryProduct.push({ urlGallery: this.img0}) 
        console.log(this.datosGalleryProduct);
      }
      reader.readAsDataURL(this.fileToUpload);
    }else{
      alert("Imagenes Completas");
    }
    
  }

  RemoveImg0(){
    this.datosGalleryProduct.splice(0, 1);
    this.img0 ="";
  }

  // img1
  handleFileInput1(file: FileList){

    if(this.datosGalleryProduct.length < 4){
      this.RemoveImg1();
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) =>{
        this.img1= event.target.result;
        this.datosGalleryProduct.push({ urlGallery: this.img1}) 
        console.log(this.datosGalleryProduct);
      }
      reader.readAsDataURL(this.fileToUpload);
    }else{
      alert("Imagenes Completas");
    }
  }

  RemoveImg1(){
    this.datosGalleryProduct.splice(1, 1);
    this.img1 ="";
  }

  // img2
  handleFileInput2(file: FileList){
    if(this.datosGalleryProduct.length < 4){
      this.RemoveImg2();
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) =>{
        this.img2= event.target.result;
        this.datosGalleryProduct.push({ urlGallery: this.img2}) 
        console.log(this.datosGalleryProduct);
      }
      reader.readAsDataURL(this.fileToUpload);
    }else{
      alert("Imagenes Completas");
    }
  }

  RemoveImg2(){
    this.datosGalleryProduct.splice(2, 1);
    this.img2 ="";
  }


// img3
  handleFileInput3(file: FileList){
    if(this.datosGalleryProduct.length < 4){
      this.RemoveImg3();
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) =>{
        this.img3= event.target.result;
        this.datosGalleryProduct.push({ urlGallery: this.img3}) 
        console.log(this.datosGalleryProduct);
      }
      reader.readAsDataURL(this.fileToUpload);
    }else{
      alert("Imagenes Completas");;
    }
  }
  RemoveImg3(){
    this.datosGalleryProduct.splice(3, 1);
    this.img3 ="";
  }






}
