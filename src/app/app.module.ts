import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GuideComponent } from './pages/guide/guide.component';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {RouterModule} from '@angular/router';
import {GastronomiaComponent} from './pages/gastronomia/gastronomia.component';
import { VidaNoctComponent } from './pages/vida-noct/vida-noct.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { EsparcimientoComponent } from './pages/esparcimiento/esparcimiento.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { PanaderiaComponent } from './pages/panaderia/panaderia.component';
import { CafeteriasComponent } from './pages/cafeterias/cafeterias.component';
import { PizzeriaComponent } from './pages/pizzeria/pizzeria.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import {SidenavComponent} from './pages/sidenav/sidenav.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { KyloComponent } from './pages/kylo/kylo.component';
import {AgmCoreModule} from '@agm/core';
import { SextoSentidoComponent } from './pages/sexto-sentido/sexto-sentido.component';
import { ZittoComponent } from './pages/zitto/zitto.component';
import { LaMaquinaComponent } from './pages/la-maquina/la-maquina.component';
import { BonafideComponent } from './pages/bonafide/bonafide.component';
import { MalvinaComponent } from './pages/malvina/malvina.component';
import { ElPalacioComponent } from './pages/el-palacio/el-palacio.component';
import { SubwayComponent } from './pages/subway/subway.component';
import { UnaOuvinaComponent } from './pages/una-ouvina/una-ouvina.component';
import { SanguchetoComponent } from './pages/sangucheto/sangucheto.component';
import { PizzaQuePizzaComponent } from './pages/pizza-que-pizza/pizza-que-pizza.component';
import { ChanchoNegroComponent } from './pages/chancho-negro/chancho-negro.component';
import { SanTelmoComponent } from './pages/san-telmo/san-telmo.component';
import { BalcarceComponent } from './pages/balcarce/balcarce.component';
import { LaFornarinaComponent } from './pages/la-fornarina/la-fornarina.component';
import { SanFranciscoComponent } from './pages/san-francisco/san-francisco.component';
import { BelenComponent } from './pages/belen/belen.component';
import { LeBoulangerComponent } from './pages/le-boulanger/le-boulanger.component';
import { SirwilliamsComponent } from './pages/sirwilliams/sirwilliams.component';
import { PlanbComponent } from './pages/planb/planb.component';
import { PenonComponent } from './pages/penon/penon.component';
import { MonaComponent } from './pages/mona/mona.component';
import { BieroComponent } from './pages/biero/biero.component';
import { ElesconditeComponent } from './pages/elescondite/elescondite.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { JuanaComponent } from './pages/juana/juana.component';
import { EvaComponent } from './pages/eva/eva.component';
import { RedCrossComponent } from './pages/red-cross/red-cross.component';
import { LaOvejaNegraComponent } from './pages/la-oveja-negra/la-oveja-negra.component';
import { LauraGarciaComponent } from './pages/laura-garcia/laura-garcia.component';
import { BrandsenComponent } from './pages/brandsen/brandsen.component';
import { BubaComponent } from './pages/buba/buba.component';
import { GatoNegroComponent } from './pages/gato-negro/gato-negro.component';
import { ReginaComponent } from './pages/regina/regina.component';
import { ComputacionComponent } from './pages/computacion/computacion.component';
import { SoftInformaticaComponent } from './pages/soft-informatica/soft-informatica.component';
import { TecnoShopComponent } from './pages/tecno-shop/tecno-shop.component';
import { ComputacionDcComponent } from './pages/computacion-dc/computacion-dc.component';
import { LicoresComponent } from './pages/licores/licores.component';
import { Licoreria1993Component } from './pages/licoreria1993/licoreria1993.component';
import { ClasicoComponent } from './pages/clasico/clasico.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { CatuloComponent } from './pages/catulo/catulo.component';
import { ElParqueComponent } from './pages/el-parque/el-parque.component';
import { GoBarComponent } from './pages/go-bar/go-bar.component';
import { LaCavaComponent } from './pages/la-cava/la-cava.component';
import { LiverComponent } from './pages/liver/liver.component';
import { AmelixComponent } from './pages/amelix/amelix.component';
import { BowlingComponent } from './pages/bowling/bowling.component';
import { TeatroRomaComponent } from './pages/teatro-roma/teatro-roma.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MessageService} from './services/message.service';
import { LoaderComponent } from './pages/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    GuideComponent,
    GastronomiaComponent,
    VidaNoctComponent,
    ComprasComponent,
    EsparcimientoComponent,
    RestaurantComponent,
    PanaderiaComponent,
    CafeteriasComponent,
    PizzeriaComponent,
    ComidasComponent,
    KyloComponent,
    SextoSentidoComponent,
    ZittoComponent,
    LaMaquinaComponent,
    BonafideComponent,
    MalvinaComponent,
    ElPalacioComponent,
    SubwayComponent,
    UnaOuvinaComponent,
    SanguchetoComponent,
    PizzaQuePizzaComponent,
    ChanchoNegroComponent,
    SanTelmoComponent,
    BalcarceComponent,
    LaFornarinaComponent,
    SanFranciscoComponent,
    BelenComponent,
    LeBoulangerComponent,
    SirwilliamsComponent,
    PlanbComponent,
    PenonComponent,
    MonaComponent,
    BieroComponent,
    ElesconditeComponent,
    IndumentariaComponent,
    JuanaComponent,
    EvaComponent,
    RedCrossComponent,
    LaOvejaNegraComponent,
    LauraGarciaComponent,
    BrandsenComponent,
    BubaComponent,
    GatoNegroComponent,
    ReginaComponent,
    ComputacionComponent,
    SoftInformaticaComponent,
    TecnoShopComponent,
    ComputacionDcComponent,
    LicoresComponent,
    Licoreria1993Component,
    ClasicoComponent,
    DrinksComponent,
    CatuloComponent,
    ElParqueComponent,
    GoBarComponent,
    LaCavaComponent,
    LiverComponent,
    AmelixComponent,
    BowlingComponent,
    TeatroRomaComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2UsefulSwiperModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
