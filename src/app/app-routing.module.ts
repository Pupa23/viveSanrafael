import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GuideComponent} from './pages/guide/guide.component';
import {GastronomiaComponent} from './pages/gastronomia/gastronomia.component';
import {VidaNoctComponent} from './pages/vida-noct/vida-noct.component';
import {ComprasComponent} from './pages/compras/compras.component';
import {EsparcimientoComponent} from './pages/esparcimiento/esparcimiento.component';
import {RestaurantComponent} from './pages/restaurant/restaurant.component';
import {PizzeriaComponent} from './pages/pizzeria/pizzeria.component';
import {CafeteriasComponent} from './pages/cafeterias/cafeterias.component';
import {PanaderiaComponent} from './pages/panaderia/panaderia.component';
import {ComidasComponent} from './pages/comidas/comidas.component';
import {KyloComponent} from './pages/kylo/kylo.component';
import {LaFornarinaComponent} from './pages/la-fornarina/la-fornarina.component';
import {BelenComponent} from './pages/belen/belen.component';
import {SanFranciscoComponent} from './pages/san-francisco/san-francisco.component';
import {LeBoulangerComponent} from './pages/le-boulanger/le-boulanger.component';
import {ZittoComponent} from './pages/zitto/zitto.component';
import {PizzaQuePizzaComponent} from './pages/pizza-que-pizza/pizza-que-pizza.component';
import {SanguchetoComponent} from './pages/sangucheto/sangucheto.component';
import {UnaOuvinaComponent} from './pages/una-ouvina/una-ouvina.component';
import {SubwayComponent} from './pages/subway/subway.component';
import {LaMaquinaComponent} from './pages/la-maquina/la-maquina.component';
import {MalvinaComponent} from './pages/malvina/malvina.component';
import {SanTelmoComponent} from './pages/san-telmo/san-telmo.component';
import {SextoSentidoComponent} from './pages/sexto-sentido/sexto-sentido.component';
import {BonafideComponent} from './pages/bonafide/bonafide.component';
import {BalcarceComponent} from './pages/balcarce/balcarce.component';
import {SirwilliamsComponent} from './pages/sirwilliams/sirwilliams.component';
import {PlanbComponent} from './pages/planb/planb.component';
import {BieroComponent} from './pages/biero/biero.component';
import {PenonComponent} from './pages/penon/penon.component';
import {ElesconditeComponent} from './pages/elescondite/elescondite.component';
import {MonaComponent} from './pages/mona/mona.component';
import {IndumentariaComponent} from './pages/indumentaria/indumentaria.component';
import {JuanaComponent} from './pages/juana/juana.component';
import {EvaComponent} from './pages/eva/eva.component';
import {RedCrossComponent} from './pages/red-cross/red-cross.component';
import {LaOvejaNegraComponent} from './pages/la-oveja-negra/la-oveja-negra.component';
import {LauraGarciaComponent} from './pages/laura-garcia/laura-garcia.component';
import {BrandsenComponent} from './pages/brandsen/brandsen.component';
import {BubaComponent} from './pages/buba/buba.component';
import {GatoNegroComponent} from './pages/gato-negro/gato-negro.component';
import {ReginaComponent} from './pages/regina/regina.component';
import {ComputacionComponent} from './pages/computacion/computacion.component';
import {SoftInformaticaComponent} from './pages/soft-informatica/soft-informatica.component';
import {TecnoShopComponent} from './pages/tecno-shop/tecno-shop.component';
import {ComputacionDcComponent} from './pages/computacion-dc/computacion-dc.component';
import {LicoresComponent} from './pages/licores/licores.component';
import {Licoreria1993Component} from './pages/licoreria1993/licoreria1993.component';
import {ClasicoComponent} from './pages/clasico/clasico.component';
import {DrinksComponent} from './pages/drinks/drinks.component';
import {CatuloComponent} from './pages/catulo/catulo.component';
import {ElParqueComponent} from './pages/el-parque/el-parque.component';
import {GoBarComponent} from './pages/go-bar/go-bar.component';
import {LaCavaComponent} from './pages/la-cava/la-cava.component';
import {LiverComponent} from './pages/liver/liver.component';
import {AmelixComponent} from './pages/amelix/amelix.component';
import {BowlingComponent} from './pages/bowling/bowling.component';
import {TeatroRomaComponent} from './pages/teatro-roma/teatro-roma.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'guia',
    component: GuideComponent
  },
  {
    path: 'gastronomia',
    component: GastronomiaComponent
  },
  {
    path: 'vida-nocturna',
    component: VidaNoctComponent
  },
  {
    path: 'compras',
    component: ComprasComponent
  },
  {
    path: 'esparcimiento',
    component: EsparcimientoComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantComponent
  },
  {
    path: 'pizzerias-sandwicherias',
    component: PizzeriaComponent
  },
  {
    path: 'cafeterias',
    component: CafeteriasComponent
  },
  {
    path: 'panaderias',
    component: PanaderiaComponent
  },
  {
    path: 'casas-de-comida',
    component: ComidasComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'kylo',
    component: KyloComponent
  },
  {
    path: 'la-fornarina',
    component: LaFornarinaComponent
  },
  {
    path: 'belen',
    component: BelenComponent
  },
  {
    path: 'san-francisco',
    component: SanFranciscoComponent
  },
  {
    path: 'le-boulanger',
    component: LeBoulangerComponent
  },
  {
    path: 'zitto',
    component: ZittoComponent
  },
  {
    path: 'pizza-que-pizza',
    component: PizzaQuePizzaComponent
  },
  {
    path: 'sangucheto',
    component: SanguchetoComponent
  },
  {
    path: 'una-de-ouvina',
    component: UnaOuvinaComponent
  },
  {
    path: 'subway',
    component: SubwayComponent
  },
  {
    path: 'la-maquina',
    component: LaMaquinaComponent
  },
  {
    path: 'malvina',
    component: MalvinaComponent
  },
  {
    path: 'san-telmo',
    component: SanTelmoComponent
  },
  {
    path: 'sexto-sentido',
    component: SextoSentidoComponent
  },
  {
    path: 'bonafide',
    component: BonafideComponent
  },
  {
    path: 'balcarce',
    component: BalcarceComponent
  },
  {
    path: 'sir-williams',
    component: SirwilliamsComponent
  },
  {
    path: 'plan-b',
    component: PlanbComponent
  },
  {
    path: 'biero',
    component: BieroComponent
  },
  {
    path: 'penon',
    component: PenonComponent
  },
  {
    path: 'el-escondite',
    component: ElesconditeComponent
  },
  {
    path: 'mona',
    component: MonaComponent
  },
  {
    path: 'indumentaria',
    component: IndumentariaComponent
  },
  {
    path: 'juana',
    component: JuanaComponent
  },
  {
    path: 'eva',
    component: EvaComponent
  },
  {
    path: 'red-cross',
    component: RedCrossComponent
  },
  {
    path: 'la-oveja-negra',
    component: LaOvejaNegraComponent
  },
  {
    path: 'laura-garcia',
    component: LauraGarciaComponent
  },
  {
    path: 'brandsen',
    component: BrandsenComponent
  },
  {
    path: 'buba',
    component: BubaComponent
  },
  {
    path: 'gato-negro',
    component: GatoNegroComponent
  },
  {
    path: 'regina',
    component: ReginaComponent
  },
  {
    path: 'computacion',
    component: ComputacionComponent
  },
  {
    path: 'soft-informatica',
    component: SoftInformaticaComponent
  },
  {
    path: 'tecno-shop',
    component: TecnoShopComponent
  },
  {
    path: 'computacion-dc',
    component: ComputacionDcComponent
  },
  {
    path: 'licores',
    component: LicoresComponent
  },
  {
    path: '1933',
    component: Licoreria1993Component
  },
  {
    path: 'clasico',
    component: ClasicoComponent
  },
  {
    path: 'drinks',
    component: DrinksComponent
  },
  {
    path: 'catulo',
    component: CatuloComponent
  },
  {
    path: 'el-parque',
    component: ElParqueComponent
  },
  {
    path: 'go-bar',
    component: GoBarComponent
  },
  {
    path: 'la-cava',
    component: LaCavaComponent
  },
  {
    path: 'liver',
    component: LiverComponent
  },
  {
    path: 'amelix',
    component: AmelixComponent
  },
  {
    path: 'altos-del-sol',
    component: BowlingComponent
  },
  {
    path: 'teatro-roma',
    component: TeatroRomaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
