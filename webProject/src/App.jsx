import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider } from './Context/ThemeContext'
import Hero from './components/Hero/Hero'
import Trending from './components/Trends/Trending'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    // <div>
    //   <NavBar/>
    //   {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quaerat facilis deleniti placeat incidunt. Soluta ut eos iusto a illo fuga ab, maxime, voluptas optio pariatur aliquam ullam unde. Omnis!
    //   Mollitia molestiae iure dolorem maxime voluptate inventore! Laboriosam commodi aspernatur rem, sit obcaecati libero amet, qui a similique esse hic. Consequatur in voluptatibus veritatis nemo distinctio, ipsam et. Iste, neque.
    //   Quisquam excepturi distinctio iste fugit sunt ea possimus labore nostrum! Minus enim tempore libero excepturi veniam atque unde rerum? Quam, illum. Excepturi vero voluptatem explicabo libero! Qui maxime architecto incidunt.
    //   Maxime eveniet, praesentium impedit illo unde, ipsa harum aut veniam a id rem? Nostrum iusto alias ipsum possimus recusandae deleniti blanditiis molestiae qui? Voluptas maxime similique illo repellendus fugit excepturi!
    //   Veritatis dolores est ea facere hic consectetur itaque aliquid. Aliquid, est ex voluptatibus earum eos eveniet ducimus, quam cupiditate aut sit eum. Ipsam nisi, veritatis eum et optio nihil provident!
    //   Quo maiores nam ipsam consequuntur tempora distinctio, corrupti consectetur itaque sunt cumque excepturi, dignissimos sint! Eaque omnis cupiditate aspernatur minima pariatur, ratione, consectetur ipsa nulla sed consequatur, mollitia debitis illo?
    //   Officia illum ducimus cupiditate laudantium labore praesentium, saepe sint culpa nobis architecto. Excepturi accusamus consequatur quis minus? Nemo, quia ab ea numquam ratione aut omnis doloremque fuga, esse atque aspernatur!
    //   Delectus facilis nisi culpa molestias ut error maiores eligendi quam voluptatem odit harum alias aspernatur corrupti possimus adipisci dignissimos vero aut optio tempore, quos quae? Ducimus perferendis impedit commodi quia.
    //   Quasi, esse? Dolore maxime illo assumenda similique nam eos, explicabo ex ad quibusdam dolor ut fuga inventore error corrupti. Ullam quia asperiores et, optio totam numquam consequatur quod velit natus.
    //   A eveniet, officia facilis veritatis saepe eos voluptates architecto itaque qui nesciunt, similique obcaecati nisi impedit exercitationem accusamus cupiditate. Assumenda eos commodi quo ipsam nulla laboriosam expedita ea culpa perspiciatis.
    //   Voluptatum quidem neque sint optio quia ad nihil, dolore, fuga quibusdam aliquam et deleniti voluptatibus? Alias accusamus officia quis unde nihil hic commodi, non consequatur, cupiditate ipsam accusantium! Necessitatibus, expedita.
    //   Corrupti, unde, ipsum est vero harum, debitis nesciunt fugiat obcaecati iste amet sunt. Magni sint eius sequi mollitia tempora facere odit, enim asperiores laboriosam, corrupti labore, maiores doloribus. Ratione, nostrum!
    //   Nostrum nihil exercitationem blanditiis repudiandae corporis quaerat voluptatibus nemo ipsam ea, sint obcaecati, nam ipsum voluptatem magni assumenda enim, nesciunt cumque et magnam totam dignissimos quo. Soluta voluptatibus quas distinctio.
    //   Recusandae quisquam dicta reprehenderit et reiciendis a labore hic vitae officiis! Eum placeat molestias iusto, veritatis aperiam quod similique, soluta nostrum facilis cumque odio sequi quam aut nesciunt consequuntur? Dolorem!
    //   Minus architecto officiis cupiditate, fugiat autem distinctio maiores maxime. Blanditiis sint reprehenderit debitis totam deserunt, illum officia. Eveniet nobis, veniam voluptatem consequatur accusantium repudiandae, dicta natus sed et placeat est?
    //   Consequatur architecto iure nemo mollitia aut quia veritatis cupiditate id, quibusdam voluptas et nam deleniti in modi culpa eligendi, eveniet doloremque deserunt! Voluptas nesciunt ipsam labore accusantium officia pariatur praesentium.
    //   Magnam saepe dignissimos rerum eius eos aspernatur quo, similique tenetur id aliquam maxime hic unde impedit voluptatibus ipsam dolorem, provident modi assumenda commodi iste, harum quae non recusandae. Corrupti, vero.
    //   Voluptatibus error modi nesciunt itaque magnam id dolorem nobis voluptatum odio, mollitia quos animi? Aspernatur, eum. Enim blanditiis libero eius vero, natus, accusantium error delectus iure itaque, numquam cum ipsa?
    //   Dicta aspernatur temporibus quis qui. Nobis placeat blanditiis quibusdam nostrum obcaecati. Corrupti impedit excepturi, cumque optio obcaecati asperiores sint! Dolorum laudantium voluptate magni itaque dolor molestiae reiciendis tenetur quod nobis.
    //   Deleniti ratione nobis nesciunt, excepturi reiciendis sunt optio blanditiis magnam distinctio ex, vel hic sint nostrum molestias consequatur repellat odit ipsa, id rerum! Obcaecati autem voluptate aliquam eligendi ullam corporis?
    //   Temporibus, ducimus dolore. Assumenda, nostrum quaerat pariatur et blanditiis temporibus consectetur illo impedit. Facilis ratione pariatur vero veritatis voluptate facere? Maxime accusamus vel minus nostrum, ad natus debitis laborum quasi.
    //   Facilis veniam deserunt tempore sunt in saepe, excepturi molestiae ipsam facere voluptatum veritatis tenetur debitis asperiores temporibus blanditiis at magnam mollitia eius non cum suscipit? Similique atque accusantium tenetur eius.
    //   Fuga iure maxime rem! Dolor voluptates iusto, quo sit non exercitationem enim reiciendis ipsa nesciunt corrupti, eveniet, quam magni provident adipisci vel iure consequuntur. Veniam quo iste nulla culpa possimus?
    //   Deserunt corporis veritatis saepe suscipit nemo ut. Obcaecati neque eveniet, qui consequuntur dignissimos iure modi ratione maxime ea facere illum quod. Quis, aut obcaecati fuga voluptas eaque soluta quia assumenda!
    //   Minus, reiciendis! Suscipit, rerum quisquam. Veritatis repellendus, voluptate vero laborum hic quae nisi, perspiciatis quaerat culpa ea earum assumenda eius obcaecati incidunt dolores nesciunt dignissimos, dolore voluptatum voluptatibus iusto temporibus!
    //   Amet fugit quasi dolorum minima quo id tempore ex iusto natus, explicabo odit animi laudantium commodi culpa eum at recusandae voluptas eaque consectetur, reiciendis, nulla dolorem accusamus praesentium. Veniam, impedit.
    //   Quod sint ut quidem eaque iure nostrum? Ipsam modi facere exercitationem adipisci eveniet? A dolor magnam, amet deleniti placeat quibusdam atque illo quis quo doloribus consectetur, maiores eius, labore repudiandae.
    //   Unde quas veritatis qui nesciunt, non accusamus ipsam assumenda voluptatibus molestiae eveniet corporis vero earum at dicta corrupti alias amet, doloribus iste tempore quaerat, ducimus incidunt totam similique natus. Hic!
    //   Praesentium, repellat quo non ab a aut itaque quaerat consectetur quibusdam impedit neque id modi obcaecati labore! Possimus eius saepe unde beatae, laboriosam praesentium sint in doloremque deleniti, illo dolorum!
    //   Architecto labore quis laudantium! Magnam omnis pariatur laborum, perferendis reiciendis illo, alias eligendi nisi aliquid voluptatibus culpa? Velit similique vero ipsa voluptatibus, impedit saepe architecto eaque corrupti quae? Vel, repellendus?
    //   Error eveniet explicabo magni quod nam dolor perferendis consequuntur? Suscipit, velit minus iusto est aspernatur, animi repellat ea doloremque obcaecati quo sunt molestias alias deserunt quidem fugit repudiandae harum illum?
    //   Impedit doloribus, est quo quis adipisci asperiores voluptatum voluptas, commodi explicabo error numquam ea voluptate quas ipsam? Quos dignissimos quibusdam accusamus incidunt repellat quaerat, quidem sed error, quisquam ipsam placeat.
    //   Quam distinctio at deleniti a dolorum asperiores dicta ut ratione ipsam quidem necessitatibus eveniet deserunt reprehenderit, illo ab fugiat voluptatem, voluptates aperiam esse eum pariatur veritatis maxime hic. Molestias, delectus!
    //   Numquam est molestiae cupiditate mollitia eveniet ipsum qui quod iusto exercitationem voluptatum accusantium blanditiis, aliquid beatae deleniti fuga officia quas suscipit consequuntur dicta ullam laudantium porro quisquam? Deleniti, unde praesentium.
    //   Molestiae voluptatum reiciendis nobis rerum assumenda iure distinctio nam aliquam mollitia dolore sapiente ratione veritatis, magni corporis architecto accusamus in! Facere, praesentium? Maiores iusto voluptates atque aut dicta, eum laborum?
    //   Quas sunt, illum obcaecati inventore quam optio aliquam! Dolores incidunt suscipit possimus quibusdam sapiente nemo tempora eligendi blanditiis accusantium. Animi eaque repellat temporibus, quos placeat atque quibusdam. Reiciendis, placeat cum.
    //   Iure atque accusamus totam non rem, sint quisquam, molestiae molestias eos magni numquam! Cumque nobis beatae a perferendis ea fugit minus magnam, quo eaque ducimus nisi repudiandae officia minima provident!
    //   Quaerat magni fuga incidunt in! Perspiciatis numquam labore vero cumque repellendus. Iste molestiae excepturi at eaque nostrum porro ipsam soluta corporis tenetur, fuga tempora tempore aut aperiam quas rem. Atque!
    //   Totam sapiente, deserunt sit commodi maiores perspiciatis quas, expedita dicta, consequuntur laudantium quae rerum est qui repellat. Quibusdam, consequatur! Similique possimus consequatur doloribus, placeat alias recusandae sapiente dolores atque mollitia.
    //   Esse, tempora! Culpa eius at qui. Quae earum tenetur porro, laboriosam provident vero corporis dicta dolor nesciunt natus itaque ullam nemo aperiam id vel commodi nobis voluptate dolorum eligendi sunt!
    //   Cumque veniam culpa velit iste officia ipsum, alias dolor consectetur rerum ex est itaque rem voluptas? Amet minima odit, ducimus dolorum ipsa ut nostrum eaque assumenda? Omnis ipsa nostrum suscipit.
    //   Magni eius deleniti fuga nesciunt ipsa. Ratione explicabo ab excepturi dolor animi odio accusamus voluptatum aut recusandae non, ea sit ipsum iure! Saepe laborum aliquid harum ipsa pariatur, cumque et.
    //   Eligendi aperiam dicta omnis quod provident quo qui impedit fugiat? Esse, autem culpa! Excepturi numquam eos perspiciatis itaque, expedita optio dolore voluptas ipsum iusto molestiae voluptate facilis quaerat maxime illo.
    //   Maxime distinctio debitis sunt, dolores quibusdam non recusandae rerum praesentium corporis fugiat modi fugit molestias eveniet quia placeat voluptates, ab cumque possimus, dolore sequi aliquid saepe nam! Explicabo, consequatur minus?
    //   Hic dolore a, velit deserunt delectus asperiores doloribus, ab doloremque quisquam quibusdam aperiam et illo praesentium labore voluptas tenetur. Ullam doloribus sequi accusamus fuga, enim amet voluptatum doloremque recusandae quis.
    //   Adipisci excepturi fugit ipsam sunt animi maiores ipsum quis doloremque vel earum facilis dolor, error accusamus ipsa accusantium. Architecto repudiandae laborum possimus eaque aperiam quibusdam odio! Modi maxime tempora repellendus.
    //   Necessitatibus ab deleniti modi earum ex inventore ullam, atque ratione dolorum autem a quibusdam maxime provident, sit impedit fugit, libero officia perferendis at. Explicabo odio harum qui, perspiciatis doloribus perferendis.
    //   Natus magni voluptatem inventore voluptate, hic fugiat explicabo corporis cumque suscipit aliquam cum voluptatum dignissimos deleniti eos officiis illo dolorem ipsa voluptatibus quod rerum! Rem non dicta sit amet vitae!
    //   Hic aperiam iure officia praesentium? Nostrum ea sequi id, mollitia sapiente veritatis. Eum voluptatem animi blanditiis quibusdam, aliquid quis dolores eius obcaecati et autem quidem ea sunt? Animi, assumenda repellat.
    //   Minus illo quidem molestiae vero, veritatis ducimus optio itaque vel, perferendis nemo possimus ab libero dolore inventore doloremque magnam. Nihil perspiciatis aspernatur doloribus fuga facere cupiditate est aliquam quidem obcaecati.
    //   Deleniti praesentium officia quibusdam pariatur, commodi officiis illo expedita quos quisquam a aut, distinctio odio nesciunt? Modi nostrum totam commodi, dolore porro fugit dolorem recusandae itaque sapiente? Nisi, mollitia distinctio.
    //   Numquam quos porro sequi iure. Quas architecto cum, praesentium similique a culpa aperiam cupiditate veniam dolorum sed illo consectetur molestiae voluptatem atque, pariatur quis, facilis vero earum non inventore asperiores.
    //   Voluptate reiciendis ipsum molestiae dolore illo non consequuntur veniam aliquam beatae quae, suscipit, nulla ad? Fugiat quibusdam pariatur eius, omnis aspernatur aliquam! Quos placeat recusandae obcaecati voluptatum iste, harum nisi?
    //   Delectus repellat odio omnis maxime odit modi dolor reprehenderit nulla est doloremque harum nobis, explicabo assumenda, a earum nam tempora! Distinctio doloribus maiores ex eligendi inventore, obcaecati expedita. Iusto, optio!
    //   Perferendis vel necessitatibus nisi asperiores nihil, assumenda blanditiis maxime consequatur nulla corporis, magnam rem! Iste ex, necessitatibus commodi officia explicabo illum minima quos, natus facere sit deserunt nam quidem nihil.
    //   Ad voluptate asperiores corrupti deleniti ex quaerat, impedit animi quae, nam ratione officia libero. Fugit excepturi iste error in nostrum corporis reprehenderit officiis porro nobis assumenda, quos, quod quas aut!
    //   Animi cumque soluta quis hic, id accusamus? Nihil omnis minima ex voluptatibus beatae consequuntur, molestiae laudantium, nam culpa natus eius cupiditate modi quisquam sint temporibus. Totam necessitatibus sapiente quas officiis?
    //   Animi atque quam exercitationem doloribus, voluptates officia perspiciatis ratione ex porro. Consequuntur, sapiente. Repudiandae, recusandae dolorem? Optio nihil perferendis ad laudantium architecto magnam amet, esse, minus eveniet voluptatum aspernatur a.
    //   Nesciunt veritatis sit ratione velit impedit eum amet eos incidunt itaque voluptatibus officia ex accusantium, cum debitis error ut at nemo consectetur ab optio! Perferendis facilis modi ipsa adipisci vel!
    //   Velit ut quo, nobis fugiat natus dolorum nostrum a ea deleniti vero nisi eos officia perferendis commodi? Praesentium quis provident deleniti eligendi? Delectus eius doloribus eveniet debitis laborum voluptate necessitatibus.
    //   Blanditiis aliquid dolor, rem illum tempora possimus consectetur unde aspernatur inventore saepe cum dolorum ullam autem praesentium adipisci libero in temporibus minima iste. Quia iste labore, tempora aliquam hic adipisci?
    //   Repudiandae, illo. Labore tempora reiciendis doloribus. Numquam possimus a accusantium, suscipit qui magni dolor obcaecati pariatur blanditiis velit autem, nihil quaerat, doloribus optio sed architecto soluta vero harum eaque fugiat!
    //   Sapiente aspernatur molestiae quam fugiat ipsum minima mollitia error dolor quod atque accusantium doloremque tempora amet eum quibusdam eligendi aut aperiam, dolore facilis veniam debitis recusandae nesciunt. Fugiat, enim sit.
    //   Earum, incidunt perspiciatis est architecto explicabo at id ipsa facere magnam unde quae accusamus quisquam ea beatae veniam quasi quidem voluptatum deleniti aut laudantium iusto sed. Molestias quos recusandae praesentium!
    //   Sint excepturi animi quasi, quod fugiat ratione? Vero minus animi, sed optio deserunt numquam quae reprehenderit molestiae eveniet quia velit architecto dolorum. Voluptatem ducimus aspernatur cumque consectetur sint! Deleniti, quis.
    //   Rerum minus delectus fugit architecto ratione aliquid vitae illo commodi temporibus. Quod quia eaque totam provident officiis blanditiis in nam odio, dignissimos vero repellendus repudiandae laudantium. Quod sequi tenetur temporibus?
    //   Possimus, deserunt repellendus iusto, reprehenderit, eligendi accusantium eius atque ipsa porro recusandae molestias sint earum adipisci distinctio. Architecto, ad deserunt? Laudantium molestias sequi velit ducimus quidem quis quam deserunt consequuntur!
    //   Facilis rerum laboriosam, minus recusandae vero ducimus porro ea, deleniti facere hic doloribus? Molestiae labore totam doloribus ad unde, quis magni, velit magnam deserunt maxime consequuntur! Provident in impedit voluptatum.
    //   Velit vitae impedit architecto error voluptatibus ea veniam corrupti quae harum vero modi consequuntur, rerum accusantium necessitatibus facere? Saepe fugiat aliquid quibusdam repellendus accusamus accusantium sapiente hic minima facere laboriosam.
    //   Nihil maxime mollitia facilis similique sapiente officia quisquam quos recusandae delectus placeat expedita voluptatibus ipsa, officiis earum, optio omnis est vero natus excepturi quo fugit! Repudiandae doloribus dicta tenetur omnis!
    //   Odio consequuntur, enim adipisci repudiandae quisquam eaque modi est, voluptas doloribus culpa iusto, dolor harum labore nobis sed quod ut perspiciatis nihil. Harum quaerat veniam explicabo, iure provident repellendus accusantium.
    //   Molestias debitis non ex doloribus! Qui itaque ratione est vel, excepturi accusamus maxime nesciunt iusto sint nisi aspernatur ullam consectetur pariatur temporibus et veniam nam nihil voluptates non repellendus! Soluta!
    //   Natus quia mollitia ipsam, enim reprehenderit impedit obcaecati officiis alias quam est exercitationem odit, illum, voluptatum maiores tenetur sapiente corporis dignissimos nemo veniam facilis ex tempore atque libero! Ducimus, sunt.
    //   Nam a vero nihil laboriosam exercitationem dolor tempora rerum maiores. Suscipit tempora saepe, minus quasi aperiam hic voluptas laboriosam. Ex reiciendis sint ipsam cumque! Ratione nisi aperiam possimus eius eaque!
    //   Distinctio et aspernatur pariatur nisi eveniet possimus inventore recusandae quas doloribus magnam porro exercitationem accusamus minima ad quis unde id eaque, ducimus nihil deserunt odit praesentium nam fugit? Ipsa, eligendi.
    //   Adipisci placeat quasi nemo rerum. Adipisci provident soluta ullam cumque libero aperiam autem ex, totam voluptate unde odit mollitia magnam possimus earum et non molestiae nobis sunt, sit iusto dolorem!
    //   Officia unde hic, ratione aperiam ea labore sit quia quibusdam suscipit earum aliquid atque ipsa, a libero accusamus, inventore recusandae qui vitae natus! Deserunt consequatur aliquid dolor quam consectetur deleniti?
    //   Minus obcaecati, quam eaque rerum eveniet quisquam. Voluptas, aliquid consectetur! Iusto, praesentium ullam. Vero, unde asperiores beatae fuga obcaecati pariatur, atque, eligendi enim reprehenderit nisi nulla porro repudiandae minus perferendis!
    //   Quo earum modi et commodi facilis rerum, expedita, molestiae nesciunt maxime suscipit at in voluptas, laborum soluta deserunt. Iusto rerum perferendis nam iure doloremque asperiores suscipit vel, numquam et aliquam.
    //   Dignissimos deleniti sequi incidunt minus qui praesentium ipsam impedit iure enim ipsum fugit excepturi quisquam voluptatibus quod totam recusandae, sunt quibusdam! Consequatur minima reprehenderit minus dolor? Consectetur impedit nisi necessitatibus!
    //   Quae dolores excepturi voluptatibus sint vero quia nemo doloribus accusamus atque, soluta commodi, dignissimos exercitationem vitae repudiandae autem at iusto cupiditate odio ipsum sequi est itaque cumque. Repudiandae, autem inventore!
    //   Nesciunt, sed vero quaerat quisquam dolores eveniet! Odio iure blanditiis aut, quibusdam doloribus magnam facilis tempora nihil. Obcaecati voluptates recusandae totam eaque ipsam, unde omnis. Architecto veniam sapiente odit molestiae.
    //   Mollitia earum sit laboriosam accusantium nostrum? Temporibus laborum sequi quia maiores similique alias molestias accusantium aspernatur, cumque eum hic eligendi nostrum exercitationem architecto fuga et! Totam cupiditate amet ipsum dolore!
    //   Ad sapiente nisi iure voluptatem, itaque perspiciatis aperiam, sit aspernatur incidunt eveniet ipsam excepturi ipsum voluptas quas ducimus. Incidunt mollitia maxime, modi ullam debitis explicabo dolore at. Numquam, reprehenderit obcaecati!
    //   Tempora dolores ad provident eligendi voluptatibus autem magni sequi quaerat. Impedit excepturi suscipit quis iure incidunt necessitatibus provident fugiat? Reprehenderit numquam totam praesentium atque reiciendis dicta culpa placeat suscipit dolor!
    //   Rem itaque ipsam doloribus at provident laboriosam facilis molestias architecto laborum tempore, a illum quaerat tenetur quidem eius et vitae, repellendus, esse dolores dolore unde consequatur dolorem distinctio. Dolor, aperiam?
    //   Voluptatibus doloremque distinctio illum. Eum iste quo quas hic. Esse delectus blanditiis impedit et iusto incidunt, praesentium doloremque ea odit adipisci aliquam amet, quia cumque quisquam alias, voluptate minus. Asperiores.
    //   Tenetur possimus amet, vel ex animi, ipsum illum quos, ipsam quaerat facilis neque in cupiditate nostrum quis! Ea, qui voluptatem quisquam, molestias quis voluptates a non possimus, cupiditate excepturi repellendus.
    //   Distinctio itaque molestias eius consequatur quod voluptatum repellat animi assumenda hic tempora exercitationem praesentium, minus, amet modi sint nisi laborum corrupti. Vitae repellat harum rerum et in, quos temporibus explicabo?
    //   Dolorem quis nobis sunt, ullam soluta exercitationem tempora quod incidunt commodi eaque quae quam at mollitia repellat, veritatis sapiente blanditiis iure libero praesentium sed dolor suscipit delectus hic. Dolor, accusantium.
    //   Facilis unde, sunt, ipsam architecto consectetur placeat et tempore dolore porro quasi obcaecati! Esse consequuntur officiis non, vel explicabo, totam exercitationem tenetur magni magnam delectus praesentium incidunt quaerat, animi laudantium?
    //   Beatae maxime non hic enim animi fugiat quasi labore dolorem nemo dolores itaque consequatur delectus obcaecati officiis quia voluptatibus praesentium necessitatibus eos voluptate, nihil architecto! Iste aliquid unde suscipit iure?
    //   Tempore quidem quisquam veritatis, laborum iusto obcaecati aperiam facere, eligendi et ut consequatur explicabo accusantium est, laboriosam incidunt dicta ex eum ipsum quia totam quaerat magni. Dignissimos nemo dicta ipsum!
    //   Nulla dignissimos voluptatum iste, possimus earum facilis pariatur vel optio magnam autem quis quas est itaque vitae veniam repellat id eaque deserunt, deleniti maxime minus! Consequuntur facilis dicta atque! Provident!
    //   Non ea quos sed maiores voluptatum quis, a blanditiis voluptate dolorum et repellat temporibus ipsa minima id eos consectetur nisi animi pariatur cum consequuntur assumenda natus ex? Praesentium, quo libero.
    //   Blanditiis cum dolor quas maiores perferendis, doloremque a velit minus sunt nam obcaecati dolore maxime quam facere voluptatem cupiditate accusantium esse fugit ad enim omnis reprehenderit voluptatum exercitationem sint! Veritatis?
    //   Veritatis, exercitationem modi nam veniam at placeat natus id dolores deleniti esse accusamus suscipit consequatur eos recusandae aut reprehenderit tempore, totam magni quaerat, iure qui voluptates ipsam sit. Possimus, dolorem!
    //   Quia nihil eius quae aspernatur sed iusto soluta natus, laborum vel sit asperiores. Voluptate placeat magnam nemo labore mollitia necessitatibus vero, maiores corrupti rem, ad fugit eaque! Quod, consequatur quo.
    //   Quibusdam esse, dolorum ipsum doloremque ab doloribus reprehenderit placeat, illum nam, laboriosam sunt. Id aperiam dolores sit ea beatae porro nihil nostrum sed! Corporis magni autem praesentium eos facilis officiis.
    //   Saepe error dolor inventore optio dignissimos minima laudantium earum ea ipsam delectus facilis maiores sint soluta eveniet sit voluptate sapiente nostrum hic aut, dolore illum totam cum! Magni, quia unde.</p> */}
    //   <Hero/>    
    // </div>
    <ThemeProvider>
      <Toaster position='top-center'/>
        <NavBar />
        <Hero/>
        <Trending/>
        <Footer/>
    </ThemeProvider>
  )
}

export default App