// This is an automatically generated file.
// Please do not adjust it without adjusting the script.
export type Status = 'TEST' | 'KEEP' | 'ADOPT' | 'TRIAL' | 'HOLD';
export interface Item {
  name: string;
  status: Status;
  priority?: boolean;
  reason_no?: string;
  reason_en?: string;
}
export interface Group {
  name: string;
  id: string;
  items: Item[];
}
export interface Category {
  name: string;
  link: string;
  groups: Group[];
}

const categories: Record<string, Category> = {
  mobil: {
    name: 'Mobil',
    link: 'mobil',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'TypeScript',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Støtte for typescript i React Native bør vurderes, da type trygghet er kjempeviktig',
            reason_en:
              'Support for TypeScript in React Native should be considered as type safety is very important',
          },
          {
            name: 'Dart',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Brukes av Flutter rammeverket',
            reason_en: 'Used by the Flutter framework',
          },
          {
            name: 'Yaml',
            status: 'KEEP',
            priority: false,
            reason_no: 'Brukes av Flutter og React Native',
            reason_en: 'Used by both Flutter and React Native framework',
          },
          {
            name: 'C#',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Xamarin fases ut, Maui tar over. Samme språk, men avvent Maui stabilitet før revurdering.',
            reason_en:
              'Xamarin is deprecated and is phasing out, Maui is taking over. Both use the same language but we are awaiting Maui for stabilization before re-evaluating.',
          },
          {
            name: 'Ruby',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Brukes for Cocoapods som vi trenger - men som språk er det lite vits i å fokusere på',
            reason_en:
              'Used by Cocoapods - which we need - but as a language it is not worth focusing on',
          },
          {
            name: 'Swift',
            status: 'KEEP',
            priority: true,
            reason_no: 'Brukes av native iOS. Bransjestandard.',
            reason_en: 'Used by native iOS. Industry standard.',
          },
          {
            name: 'Kotlin',
            status: 'KEEP',
            priority: true,
            reason_no: 'Brukes av native Android. Bransjestandard.',
            reason_en: 'Used by native Android. Industry standard.',
          },
          {
            name: 'GraphQL',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Alternativ til vanlig REST apier - bør vurderes med tanke på nyere integrasjoner mot sky',
            reason_en:
              'Alternative to REST apis - should be considered with regards to newer integrations towards Cloud',
          },
          {
            name: 'JavaScript',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Mindre typesafe måte å jobbe med React native, unngå om vi har mulighet til fordel for typescript',
            reason_en:
              'Less typesafe langauge for React Native, avoid if possible and use TypeScript if available',
          },
          {
            name: 'Java',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Kotlin er bransjestandard for Android, Java er en rest i gamle apper og bør ikke fokuseres på',
            reason_en:
              'Kotlin is industry standard for Android, Java is a legacy remainer in old Android apps and should not be focused on',
          },
          {
            name: 'Objective-C',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Swift er bransjestandard for iOS, Objective C er bare for gamle apper. Bør ikke fokuseres på.',
            reason_en:
              'Swift is industry standard for iOS, Objective C are legacy code for old iOS apps and should not be focused on.',
          },
          {
            name: 'Groovy',
            status: 'KEEP',
            priority: false,
            reason_no: 'Brukes av Android gradle, bransjestandard',
            reason_en: 'Used by Android gradle, industry standard',
          },
        ],
      },
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'Flutter',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Store fordeler iforhold til hurtighet, modenhet, kryssplattform samt utvikler vennlighet og dokumentasjon.',
            reason_en:
              'Huge advantages in regards to development speed, maturity, cross platform as well as developer friendlyness and documentation',
          },
          {
            name: 'Hilt',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'En "nykommer" blandt dependency injection rammeverkene (sammen med Koin og Dagger2). Har stort potensiale. Er lite, kjapt og godt dokumentert. Begynn å bruke det om du ikke allerede gjør det.',
            reason_en:
              'A "newcomer" among dependency injection libraries (along with Koin and Dagger2). Great potential. Is small, fast and well documented. Start using it if not already doing so.',
          },
          {
            name: 'Jetpack Components',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Ferdige komponenter som håndterer en rekke velkjente problemer. Fungerer godt og bør brukes i native android apper',
            reason_en:
              'Finished components handling a wide array of common problems. Should be used in native Android apps.',
          },
          {
            name: 'SwiftUI',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Moderne funksjonelt rammeverk for native iOS utvikling. Veien framover for iOS native.',
            reason_en:
              'Modern functional framework for native iOS development. The road forward for iOS native.',
          },
          {
            name: 'Appcelerator',
            status: 'HOLD',
            priority: false,
            reason_no: 'Gammelt kryssplattform system, blir sjedent brukt',
            reason_en: 'Old cross-platform framework. Rarely used nowadays.',
          },
          {
            name: 'Dagger2',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Dette dependency injection rammeverket er stort og tungt, ingen vits i å bruke tid på det lenger da Google selv fokuserer på Hilt',
            reason_en:
              'This Dependency Injection framework is old and heavy, no point in focusing anymore as Android is focusing on Hilt.',
          },
          {
            name: 'Ionic',
            status: 'HOLD',
            priority: false,
            reason_no: 'Gammelt kryssplattform system, blir sjedent brukt',
            reason_en: 'Old cross-platform framework. Rarely used nowadays.',
          },
          {
            name: 'PhoneGap',
            status: 'HOLD',
            priority: false,
            reason_no: 'Gammelt kryssplattform system, blir sjedent brukt',
            reason_en: 'Old cross-platform framework. Rarely used nowadays.',
          },
          {
            name: 'Robolectric',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Denne typen enhetstesting er det lite hold i å bruke tid på lenger, Android native har egne test rammeverk som håndterer dette nå',
            reason_en:
              'This framework for unit testing is rarely used nowadays, as Android has implemented better testing methods internally.',
          },
          {
            name: 'RxJava',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Eldre reaktivt programmeringsbibliotek, holder ikke mål lenger og bør erstattes av Flow eller andre',
            reason_en:
              'Older library for programming reactive flows, should be phased out and replaced with Flow or others',
          },
          {
            name: 'Xamarin',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Microsoft har deprekert Xamarin så det er inget poeng i å bruke tid på det. Arvtageren Maui derimot må følges med.',
            reason_en:
              'Microsoft has deprecated Xamarin so there is no point in focusing on it. The inheritor, Maui, on the other hand should be considered.',
          },
          {
            name: 'Koin',
            status: 'KEEP',
            priority: false,
            reason_no:
              'En av de tre vanligste Dependency Injection rammeverkene for Android. Bør ikke fases ut, men nykommeren Hilt vil nok fase ut Koin etterhvert',
            reason_en:
              'One of the three most common Dependency Injection frameworks. Should not be phased out, but the newcomer Hilt will phase it out in time',
          },
          {
            name: 'Kotlin Coroutines',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard og en stor fordel for Kotlin som språk',
            reason_en: 'Industry standard and a great advantage for Kotlin as a language',
          },
          {
            name: 'Kotlin Flow Native',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Native utvikling som ikke brukes compose vil ha fortsatt ha fordeler av reaktiv Flow',
            reason_en:
              'Native development that does not use Compose will still have advantages to using reactive Flow programming',
          },
          {
            name: 'Native Android',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard. Vil aldri forsvinne helt',
            reason_en: 'Industry standard. Will never completely disappear.',
          },
          {
            name: 'React Native',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Kryssplattform som brukes av diverse prosjekter, bør ikke legge fra oss det helt enda. Flutter derimot kommer kjappere inn',
            reason_en:
              'Cross platform used by a number of projects - it should not be laid away, though Flutter will come more and more in',
          },
          {
            name: 'UIKit',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard for iOS native',
            reason_en: 'Industry standard for iOS Native.',
          },
          {
            name: 'XCTest',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard for testing på iOS.',
            reason_en: 'Industry standard for testing on iOS.',
          },
          {
            name: 'Kotlin Multiplatform',
            status: 'TEST',
            priority: false,
            reason_no:
              'Kryssplattform i Kotlin, bør vurderes med tanke på styrkene til Kotlin og antall ressurser som enten kan Kotlin eller har bakgrunn i Java',
            reason_en:
              'Crossplatform with Kotlin, should be tested considering Kotlins strengths and the number of resources that have experience in Kotlin or Java',
          },
          {
            name: 'Maui',
            status: 'TEST',
            priority: false,
            reason_no:
              'Arvtager etter Xamarin. Kan bli verdt å holde øye med - hovedsaklig for prosjekter som har sterk C# kompetanse som også ønsker å fokusere på mobil',
            reason_en:
              "Xamarin's inheritor. Can be useful to pay attention to - mainly for projects that have a strong C# compentence willing to work on mobile.",
          },
          {
            name: 'Jetpack Compose',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Moderne funksjonelt rammeverk for Android native. Kjappere enn tradisjonell native android, men fortsatt relativt nytt og ikke alltid like god integrasjon.',
            reason_en:
              'Modern functional framework for native Android development. Faster than traditional native Android, but still relatively new and not always as good integration',
          },
          {
            name: 'Kotlin Flow Compose',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Reaktiv programmering for Jetpack Compose, kan brukes i prosjekter nå som det er stabilt',
            reason_en:
              'Reactive programming for compose with Flow, can be used in projects now that its stable.',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'e2e-testing',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Feature modularization',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Enkapsulering av features for enklere distribuering og inkludering er fortsatt noe som bør gjøres',
            reason_en:
              'Encapsulation of features for ease of distribution and inclusion is still something that should be done.',
          },
          {
            name: 'MVVM',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Bransjestandard for Android. Rent og ryddig for både iOS og Android derimot.',
            reason_en:
              'Industry standard for Android. Clean and a good pattern for both iOS and Android though.',
          },
          {
            name: 'Cross platform',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Å redusere tid til marked har blitt en mye større prioritet enn før og antall mobilressurser er knapt. Spesielt når man må splitte det på to plattformer. Kryssplattform kommer til å bli viktigere og viktigere framover.',
            reason_en:
              'Reducing time-to-market is even bigger priority than before and the number of mobile resources are tight. Especially when having to split them to two different platforms. Crossplatform will be more and more important as time goes on.',
          },
          {
            name: 'Domain Driven Design',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Et relativt moderne arktitekturelt pattern som bør brukes.',
            reason_en: 'A relatively modern architectural pattern that should be used.',
          },
          {
            name: 'Server-driven UI',
            status: 'TEST',
            priority: false,
            reason_no:
              'Noe som bør testes ut, en interessant vei å fare siden Spotify begynte med det. Holder appen native men kan endre på det visuelle som om det er nettsider',
            reason_en:
              'Someething that should be tested and is an interesting path to take ever since Spotify startet it. Keeps the app native but you can change the visual aspects like web.',
          },
          {
            name: 'MVP',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Eldre design pattern som ikke holder helt samme utbredelsen som MVVM og bør fases ut',
            reason_en:
              "Older design pattern that doesn't quite match MVVM anymore and should be phased out.",
          },
          {
            name: 'MVC',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Eldre design pattern som ikke holder helt samme utbredelsen som MVVM og bør fases ut',
            reason_en:
              "Older design pattern that doesn't quite match MVVM anymore and should be phased out.",
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'Draw.io',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Bransjestandard verktøy for arkitektur og flyt skissering. Nyttig verktøy enda.',
            reason_en:
              'Industry standard tool for architectural and flow schematics. Still a useful tool.',
          },
          {
            name: 'Figma',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Nyeste design verktøy med god støtte for mobile flater. Bør brukes om mulig.',
            reason_en:
              'Newest design tool with good support for mobile designs. Should be used if possible.',
          },
          {
            name: 'JUnit',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Sourcetree',
            status: 'KEEP',
            priority: false,
            reason_no: 'Hendig verktøy for versjonskontroll',
            reason_en: 'Useful tool for version control.',
          },
          {
            name: 'Android Studio',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard IDE',
            reason_en: 'Industry standard IDE.',
          },
          {
            name: 'Xcode',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard IDE',
            reason_en: 'Industry standard IDE.',
          },
          {
            name: 'TestFlight',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Bransjestandard test verktøy, må brukes for å publisere test apper til testere på iOS',
            reason_en:
              'Industy standard test tool, must be used for publishing apps to testers on iOS',
          },
          {
            name: 'Visual Studio Code',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard IDE for Flutter (og andre selvsagt)',
            reason_en: 'Industry standard IDE for Flutter (and others of course).',
          },
          {
            name: 'Cocoapods',
            status: 'KEEP',
            priority: false,
            reason_no: 'Bransjestandard',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Firebase Cloud Messaging',
            status: 'KEEP',
            priority: false,
            reason_no: 'Essensielt og bransjestandard for notifikasjoner på Android',
            reason_en: 'Essential and industry standard for notifications on Android.',
          },
          {
            name: 'GitLab CI/CD',
            status: 'TEST',
            priority: false,
            reason_no: 'GitLab og automatisk bygging før klart prøves ut.',
            reason_en: 'GitLab and automation for building should of course be tested.',
          },
          {
            name: 'GCP',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Skyløsningen til Google er klart noe som bør fokuseres på med tanke på avhengighet til Firebase for Android',
            reason_en:
              'Googles cloud solution is something that should clearly be focused on considering dependency to Firebase for Android',
          },
          {
            name: 'Firebase',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Android trenger en form for Firebase integrasjon for notifikasjoner. I tillegg til de andre fordelene gjør det Firebase til et nærmest go-to verktøy for alt for mobilutvikling.',
            reason_en:
              'Android needs a form of integration towards Firebase for notifications. In addition to the other advantages it makes Firebase a near go-to solution for everything in mobile development.',
          },
          {
            name: 'Azure',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Vanligst brukt av offentlige og større bedrifter, Azure har gode integrasjoner for mobil og bør fokuseres mer på.',
            reason_en:
              'Commonly used by bigger or public companies, Azure has good integrations towards mobile and should be focused on.',
          },
          {
            name: 'Github Actions',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Github Actions gir gode muligheter for automasjon for mer enklere prosjekter men også for større som ikke er bundet av eksisterende platforms og bør klart fokuseres på',
            reason_en:
              'Github Actions gives good opportunities for automation for simpler projects but also for bigger that are not bound by existing platforms and should be focused on',
          },
          {
            name: 'Firebase ML',
            status: 'TEST',
            priority: false,
            reason_no:
              'Maskinlæring vil ikke bli redusert med tiden og Firebase sin ML komponent bør klart testes ut',
            reason_en:
              'Machine learning will not go down with time and the Firebase ML module should clearly be tested',
          },
          {
            name: 'Unity 3D',
            status: 'TEST',
            priority: false,
            reason_no:
              'Unity er en klar markedsleder for mobile applikasjoner som krever et mye større grafisk grensesnitt, med kryssplattform støtte. Bør testes ut om mulig.',
            reason_en:
              'Unity is a market leader in mobile apps with a greater graphical requirement with crossplatform support. Should be tested if possible.',
          },
          {
            name: 'IntelliJ',
            status: 'HOLD',
            priority: false,
            reason_no:
              'IntelliJ Idea er en dårlig løsning for Android da Android Studio også lages av JetBrain. For iOS finnes AppCode, men Xcode har kommet såpass på banen at det ikke er poeng med denne lenger',
            reason_en:
              'IntelliJ Idea is an bad solution for Android as Android Studio is also made by JetBrain. For iOS there is AppCode, but XCode has gotten so far that there is little point with this anymore.',
          },
          {
            name: 'Eclipse',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Gammelt IDE for Android native. Brukes ikke lenger siden Android Studio tok over. Faset ut.',
            reason_en:
              'Old IDE for Android native. Not in use anymore since Android Studio took over. Phased out.',
          },
          {
            name: 'Invision',
            status: 'KEEP',
            priority: false,
            reason_no:
              'En av de vanligste bransjeverktøy for design av mobile flater. Bør holde oss oppdatert inntil det er faset ut med Figma som blir mer og mer aktuelt.',
            reason_en:
              'One of the more common design tools for mobile design. We should keep updated until it is phased out with Figma which is more and more in the wind.',
          },
          {
            name: 'Carthage',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Et forsøk på å desentralisere cocoapods, men er komplisert og ikke like godt kjent/brukt i prosjekter. Bør fases ut.',
            reason_en:
              'An attempt to decentralize CocoaPods but more complex and not that big use in projects. Should be phased out.',
          },
          {
            name: 'Sketch',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Design verktøy som ikke er særlig relevant lenger med tanke på Invision og Figma. Fases ut.',
            reason_en:
              'Design tool that is not very relevant anymore considering Invision and Figma. Phasing out.',
          },
        ],
      },
    ],
  },
  design: {
    name: 'Design',
    link: 'design',
    groups: [
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'UU',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Hensikten er å oppnå like muligheter til samfunnsdeltakelse og motvirke diskriminering på grunnlag av nedsatt funksjonsevne.',
            reason_en:
              'The purpose of UU is to plan products, services and environments in order to make them usable for all people. ',
          },
          {
            name: 'WCAG',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Retningslinjer for tilgjengelig webinnhold og internasjonal standard for universell utforming av nettsider og apper. WCAG 2.1 standarden en del av norsk lov og dermed et krav for alle offentlige nettsteder.',
            reason_en:
              'Web Content Accessibility Guidelines for web content is the international standard for universal design of digital products and services. The WCAG 2.1 standard is part of Norwegian law and thus a requirement for all websites.',
          },
          {
            name: 'Design system',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Et designsystem er en samling av gjenbrukbare komponenter. Det er et bibliotek og rammeverk for en virksomhets digitale strategi og identitet. Komponentene kan ses på som byggesteiner for å lage en helhetlig nettside.',
            reason_en:
              "A design system is a collection of reusable components. It is a library and framework for a company's digital strategy and identity. The components can be seen as building blocks to create a comprehensive website. ",
          },
          {
            name: 'Storybook',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Gir en oversikt over eksisterende komponenter både for designere og utviklere. Alle elementene i et produkt kan plasseres der for å skape et levende designsystem.',
            reason_en:
              'Gives an overview of existing components both for designers and developers. All the elements of a product can be placed there to create a living design system.',
          },
          {
            name: 'Autonome team',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Tverrfaglig team som tar avgjørelser basert på prosjektets og teamets behov. Komplekse problemer løses best i team med stor grad av autonomi. Dette medfører økt innovasjon og nøyaktighet i problemløsning.',
            reason_en:
              'Crossfunctional teams that makes decisons based on project needs. Complex problems are best solved in teams with a high degree of autonomy. This leads to increased innovation and accuracy in problem solving.',
          },
          {
            name: 'Business design',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Business design er forretningsutvikling med et designtankesett i bunn.',
            reason_en: 'Business design is business development combined with a design mindset. ',
          },
          {
            name: 'UX design',
            status: 'KEEP',
            priority: false,
            reason_no:
              'User experience design handler om å forbedre totalopplevelsen for mennesker i interaksjon med et digitalt produkt, en tjeneste eller et system. ',
            reason_en:
              'User experience design is about improving the overall experience a person has when dealing with a digital product, service or system. ',
          },
          {
            name: 'Service design',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Tjenestedesign er en fagretning innen design med mål om å utvikle brukerrettede og helhetlige tjenester. ',
            reason_en:
              'Service design is a discipline within design with goals about developing user-oriented and holistic services. ',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'Personas/ Archetypes',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Personas er fiktive karakterer, som er lagd basert på innsikt for å representere de forskjellige brukertypene som kan bruke tjenesten, produktet, nettstedet eller merkevaren som utvikles.',
            reason_en:
              'Personas are fictional characters, based upon research in order to represent the different user types that might use a service, product, site, or brand in a similar way. ',
          },
          {
            name: 'Service blueprint',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Service Blueprint er en metode som blir brukt i tjenestedesign. Service Blueprint kan for eksempel inkludere flere aktører og tjenester for å få en helhetlig oversikt av en brukerreise.',
            reason_en:
              'The service blueprint is a method used for service design. Service blueprint can also be used by adressing several services and actors to provide a holistic overview.',
          },
          {
            name: 'Customer journey',
            status: 'KEEP',
            priority: false,
            reason_no:
              'En kundereise er en visualisering av prosessen som en person går gjennom for å oppnå et mål.',
            reason_en:
              'A CS is map is a visualization of the process that a person goes through in order to accomplish a goal.',
          },
          {
            name: 'Design sprint',
            status: 'HOLD',
            priority: false,
            reason_no:
              'En designsprint er en tidsbegrenset, fem-dagers prosess som bruker designtenkning med sikte på å redusere risikoen ved å bringe et nytt produkt, en tjeneste eller en funksjon til markedet.',
            reason_en:
              'Design sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.',
          },
          {
            name: 'Spørreundersøkelse',
            status: 'HOLD',
            priority: false,
            reason_no:
              'En spørreundersøkelse bør bestå av Tema / Problemstilling / Hypoteser / Spørsmål',
            reason_en: 'A survey should consist of a Theme / Problem / Hypotheses / Questions',
          },
          {
            name: 'Design thinking',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Design Thinking er en iterativ, ikke-lineær prosess som fokuserer på et samarbeid mellom designere og brukere.',
            reason_en:
              'Design thinking is an iterative, non-linear process which focuses on a collaboration between designers and users. ',
          },
          {
            name: 'Observation',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Observasjon av en bruker gir mer innsikt av hvordan bruker interagerer med nettsiden, tjenesten eller produktet.',
            reason_en:
              'Observation of the user gives valuable insights of their interactions with a website, service or product.',
          },
          {
            name: 'Crazy eights',
            status: 'HOLD',
            priority: false,
            reason_no:
              "Crazy 8's er en metode ofte brukt under Design Sprint. Det er en rask skisseøvelse som utfordrer folk til å skissere åtte forskjellige ideer på åtte minutter.",
            reason_en:
              "Crazy 8's is a core Design Sprint method. It is a fast sketching exercise that challenges people to sketch eight distinct ideas in eight minutes.",
          },
          {
            name: 'Card sorting',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Kortsortering er en metode brukt til blant annet design av brukeropplevelser, og kan gi innspill til struktur til f.eks. et nettsted (kan brukes i brukertester).',
            reason_en:
              'Card sorting is a method used for the design of user experiences, and can provide input for the structure of e.g. a website (can be used in user tests).',
          },
          {
            name: 'Workshops',
            status: 'KEEP',
            priority: true,
            reason_no:
              'En designdrevet workshop er et tilrettelagt møte hvor folk på tvers av fagdisipliner planlegger og prototyper brukersentrert design.',
            reason_en:
              'A design driven workshop is a facilitated meeting where multi-disciplinary teams plan and prototype user-centered designs. ',
          },
          {
            name: 'Costumer journey',
            status: 'KEEP',
            priority: false,
            reason_no:
              'En kundereise er en visualisering av prosessen som en person går gjennom for å oppnå et mål.',
            reason_en:
              'A costumer journey is a visualization of the process that a person goes through in order to accomplish a goal.',
          },
          {
            name: 'Test av design på brukere med spesielle behov',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Hvordan forstå om et design faktisk fungerer med brukere med spesielle behov. En prioritet på grunn av UU-reglene og inkluderende designbehov.',
            reason_en:
              'How to understand if a design actually works with users with special needs. A priority because of the UU rules and inclusive design needs.',
          },
          {
            name: 'MoSCoW prioritization',
            status: 'KEEP',
            priority: false,
            reason_no:
              'MoSCoW er en prioriteringsmetode som ofte blir brukt innenfor ledelse, prosjektledelse, virksomhetsanalyse og spesielt i smidige team.',
            reason_en:
              'MoSCoW is a prioritization method that is often used within management, project management, business analysis and especially in agile teams.',
          },
          {
            name: 'User stories',
            status: 'KEEP',
            priority: false,
            reason_no:
              'En brukerhistorie er en beskrivelse av funksjonen til en gitt oppgave fra et brukerperspektiv. ',
            reason_en:
              "A user story is a description of a given function from a user's perspective.",
          },
          {
            name: 'User story maps',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Kartlegging av brukerhistorier er en enkel samarbeidsøvelse som hjelper med å definere brukerens reise med et produkt eller en tjeneste, hvor det finnes muligheter og hva det kan bli til.',
            reason_en:
              'User story mapping is a simple, collaborative exercise that helps define the user’s journey within a service or a product. It can define any gaps, and what the service or product could be.',
          },
          {
            name: 'Affinity mapping',
            status: 'KEEP',
            priority: false,
            reason_no:
              'En metode for å merke alle ideer og kategorisere dem basert på deres likheter med hverandre, gir mulighet for en sterkere organisering av ideer, og til slutt en mer organisert handlingsplan.',
            reason_en:
              'A method of labeling ideas and categorizing them based on their similarities to each other allows for a stronger organization of ideas, and ultimately a more organized plan of action.',
          },
          {
            name: 'Brukertest',
            status: 'KEEP',
            priority: true,
            reason_no:
              'Brukertesting handler om å teste løsninger på ekte brukere i en realistisk kontekst. Det er selve nøkkelen i en brukersentrert designprosess.',
            reason_en:
              'User testing is about testing solutions on real users in a realistic context. It is the key to a user-centered design process.',
          },
          {
            name: 'Gerillija testing',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Geriljatesting er en metode å brukerteste på der man tar en idé eller et uferdig konsept og tester det raskt med målgruppen i deres miljø.',
            reason_en:
              'Guerrilla testing is a method where you take an idea or an unfinished concept and quickly test it with the target group in their environment.',
          },
          {
            name: 'Stakeholder mapping',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Interessentanalyse eller aktørkart bbrukes til å kartlegge potensielle parter som kan påvirke et produkt, tjeneste eller system.',
            reason_en:
              'Stakeholder mapping is the process of assessing a system and potential changes to it as they relate to relevant and interested parties.',
          },
          {
            name: 'Double/ Triple diamond',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Den doble diamanten består av fire steg. I den første diamanten skal vi 1) Oppdage og 2) Definer. Den andre diamanten setter deg på sporet av å 3) Utvikle og 4. Levere.',
            reason_en:
              'The double diamond consists of four steps. In the first diamond we will 1) Discover and 2) Define. The second diamond puts you on the track to 3) Develop and 4. Deliver.',
          },
          {
            name: 'Brukerintervju',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Brukerintervju er en kvalitativ metode i for å kartlegge en brukers behov eller forstå opplevelsen av en bestemt tjeneste eller et produkt.',
            reason_en:
              "User interviews are a qualitative method for mapping a user's needs or understanding the experience of a particular service or product",
          },
          {
            name: 'Mind map',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Et tankekart er en visuell måte å organisere ideer på.',
            reason_en: 'A mind map is a visual way to organize ideas.',
          },
          {
            name: 'Paper prototype',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Papirprototyping er en proses for å utvikle ideer og designe brukerflyter ved å bruke håndskisserte "skjermer" som representerer et digitalt produkt.',
            reason_en:
              'Paper prototyping is the process of developing ideas and designing user flows using hand-sketched “screens” that represent a digital product. ',
          },
          {
            name: 'Innsiktsfasen',
            status: 'HOLD',
            priority: false,
            reason_no:
              'I innsiktsfasen skapes en felles forståelse av designprosessen, og det settes forventninger og retningslinjer for alle involverte aktører i prosjektet.  Fokusområder: Kartlegge behov. Definere målgruppe.',
            reason_en:
              'In the insight phase, a common understanding of the design process is created, and expectations and guidelines are set for all actors involved in the project. Focus areas: Mapping needs and defining the target group.',
          },
          {
            name: "5 why's",
            status: 'KEEP',
            priority: false,
            reason_no:
              'Five whys er en iterativ spørreteknikk som brukes til å utforske årsak-og-virkning-sammenhengene som ligger til grunn for et bestemt problem.',
            reason_en:
              '5 whys is an iterative interrogative technique used to explore the cause-and-effect relationships underlying a particular problem. ',
          },
          {
            name: 'Sitemap',
            status: 'KEEP',
            priority: false,
            reason_no: 'Sitemap er en organisering og visualisering av sidestrukturer.',
            reason_en: 'Sitemap is an organization and visualization of a site structure.',
          },
          {
            name: 'Kontinuerlig iterasjon',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Å definere hypoteser, og teste og justere arbeidet etter funn og læringer. Å jobbe iterativt tillater tilpasninger til nye situasjoner, teknologi eller strategiendringer.',
            reason_en:
              'Defining hypotheses, and testing and adjusting findings and learnings. Working iteratively allows adjustments to new situations, technology or strategy changes. ',
          },
          {
            name: 'Måle Opplevd effekt',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Måter å synliggjøre hvilke resultater en innsatsen har ført til – for bedriften og for brukerne deres.',
            reason_en:
              'Ways to make results clear and visable, baseed on various measures - for a company and for their users.',
          },
          {
            name: 'Mennesker- og systemforståelse',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Omhandler studien av interaksjonen mellom mennesker og datamaskiner.',
            reason_en: 'The study of the interaction between humans and computers.',
          },
          {
            name: 'Accessibility and inclusive design',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Inkluderende design etterstreber å skape barrierefrie rom. Inkluderende design gjør tjenster brukervennlige og nyttige for alle.',
            reason_en:
              'Inclusive design examples look to create barrier-free spaces. Inclusive design makes places usable by everyone.',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'Google meet',
            status: 'KEEP',
            priority: true,
            reason_no:
              'Et uunnværlig verktøy. Fremmer raske møter og avgjørelser fremfor endeløse e-poster.',
            reason_en:
              'An indispensable tool.  We are even closer now and connect face to face with fast meetings instead of writing endless emails. ',
          },
          {
            name: 'Google calendar',
            status: 'HOLD',
            priority: true,
            reason_no: 'Tidsstyring gjort enkel og effektiv. ',
            reason_en: 'Time management made simple and efficient.',
          },
          {
            name: 'Figma',
            status: 'KEEP',
            priority: true,
            reason_no:
              'Figma er en av de mest brukte UX-plattformene med mulighet for smidig teamarbeid og gjenbrukbare elementer for designere og utviklere.',
            reason_en:
              'Figma is one of the most popular design platforms, with efficient team work and reusable design components for designers and developers.',
          },
          {
            name: 'Miro',
            status: 'KEEP',
            priority: true,
            reason_no:
              '"Visuelt samarbeidsverktøy. Det er enkelt å onboarde nye deltakere på få minutter; kraftig nok til komplekse workshops, innsiktsarbeid og planlegging."',
            reason_en:
              'Visual collaboration tool. Simple enough to onboard a new person in minutes, powerful enough for complex topics and workshops, insight work, and planning.',
          },
          {
            name: 'Slack',
            status: 'KEEP',
            priority: true,
            reason_no:
              'En enkel plattforn for å kommunisere raskt innad  i et selskap. Svært enkelt i bruk.',
            reason_en:
              'A great way to communicate across companies. Simple, clean and right to the point.',
          },
          {
            name: 'Penn og papir',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Noen ganger er de enkle løsningene de som kommuniserer på den raskeste og mest tilgjengelige måten',
            reason_en: 'Sometimes the simple solutions are the ones that communicate fastest. ',
          },
          {
            name: 'Trello',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Gratis brukervennlig kanban-tavle som er enkel å tilpasse. Brukes til oppgavehåndtering og oversikt. ',
            reason_en:
              'Free customizable and user friendly kanban board. Used for task management and overview.',
          },
          {
            name: 'Pocket',
            status: 'KEEP',
            priority: false,
            reason_no: 'En gratis tjeneste for lagre kategorisere og merke artikler. ',
            reason_en: 'A free service for save categorize and tag articles. ',
          },
          {
            name: 'Testflow',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Norsk rekrutterings- og brukertesttjeneste. Integrert med Figma og tillater semi-automatisert og umoderert brukertesting.',
            reason_en:
              'Norwegian recruitment and user test service. Integrated with Figma allows semi-automated and unmoderated user tests. ',
          },
          {
            name: 'Figma:plugin: Iconify',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Figma:plugin: Unsplash',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Figma:plugin: Contrast',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Figma:plugin: Similayer',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Figma:plugin: Color blind',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Figma:plugin: Contrast',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Klistrelapper',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Et av designerens foretrukne verktøy. Sortering med ulike farger og med riktig størrelse for et enkelt ord eller en setning. De kan grupperes, flyttes, limes og går aldri tom for batterier.',
            reason_en:
              'The designer preferred office tools. Colourful with the right size for a single word or a sentence. They can be grouped, moved, glued and never run out of batteries.',
          },
          {
            name: 'Moodboards',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Er en samling av bilder, materiale tekst, etc. som har som intensjon å vekke følelser eller fremme en bestemt stil eller konsept',
            reason_en:
              'An arrangement of images, materials, pieces of text, etc. intended to evoke or project a particular style or concept.',
          },
        ],
      },
    ],
  },
  frontend: {
    name: 'Frontend',
    link: 'frontend',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'WebAssembly',
            status: 'TEST',
            priority: false,
            reason_no:
              'WebAssembly kan i visse tilfeller gi økt ytelse, men vær obs på at just-in-time-kompilering ofte gjør at vanlig Javascript er like vel-ytende.',
            reason_en: '',
          },
          {
            name: 'Imba (programmeringsspråk)',
            status: 'TEST',
            priority: false,
            reason_no: 'Kortfattet prototyping-språk.',
            reason_en: '',
          },
          {
            name: 'clojure + fulcro',
            status: 'TEST',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'JavaScript uten typer (JSdoc-TS er regnet som typet)',
            status: 'HOLD',
            priority: true,
            reason_no:
              'Typescript som ikke trenger å transpileres kan gi mindre teknisk gjeld. Foreløpig er det en stor nok utfordring å få alle prosjekter til å bruke typer.',
            reason_en: '',
          },
          {
            name: 'ESNext',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Bruk nye EcmaScript-språkfunksjoner (som er i stage 3 og 4) og transpiler fremfor å bruke gammeldags kode.',
            reason_en: '',
          },
          {
            name: 'TypeScript',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Typing av Javascript er kommet for å bli i langtlevde prosjekter.',
            reason_en: '',
          },
          {
            name: 'GraphQL',
            status: 'ADOPT',
            priority: true,
            reason_no: 'GraphQL er en moden teknologi som passer godt for sine bruksområder.',
            reason_en: '',
          },
          {
            name: 'Elm',
            status: 'HOLD',
            priority: false,
            reason_no: 'Aktiv utvikling har tilsynelatende stoppet opp.',
            reason_en: '',
          },
          {
            name: 'Flow',
            status: 'HOLD',
            priority: false,
            reason_no: 'Typescript er et betydelig bedre alternativ.',
            reason_en: '',
          },
          {
            name: 'PHP',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Server-side-rendering av apper skrevet i rammeverk som også egner seg for klientsiden (React, Vue, Svelte) er et mer fleksibelt alternativ enn et rent server-side-språk.',
            reason_en: '',
          },
        ],
      },
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'React',
            status: 'KEEP',
            priority: true,
            reason_no: 'React er bransjestandarden for øyeblikket, og duger godt til jobben sin.',
            reason_en: '',
          },
          { name: 'Ant design', status: 'KEEP', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'react-query (Erstattes av SWR i methods)',
            status: 'ADOPT',
            priority: true,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'testing-library',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'testing-library er et bibliotek med testfunksjoner, implementert for ulike verktøy (Jest, Cypress). I tillegg til å være arbeidsbesparende, er det en fordel å ha et standard-«vokabular» man kan forholde seg til enda man bytter prosjekt eller testverktøy.',
            reason_en: '',
          },
          {
            name: 'Next',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Next gjør det lett å lage webapplikasjoner som følger alle kunstens regler uten at man legger mye arbeid i det. Andre alternativer eksisterer (Remix, SvelteKit), men ingen er så modne som Next.',
            reason_en: '',
          },
          {
            name: 'Vue',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Vue er et av de tre store rammeverkene om dagen (React og Svelte er de to andre). Hvis man synes Vue er passende for et prosjekt, må man gjerne bruke dette.',
            reason_en: '',
          },
          {
            name: 'Jest',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Standard-testverktøyet for enhetstester.',
            reason_en: '',
          },
          {
            name: 'Cypress',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Standard-testverktøyet for ende-til-ende-tester.',
            reason_en: '',
          },
          {
            name: 'SWR (Erstattes av SWR i methods)',
            status: 'ADOPT',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Material-ui',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Et godt designbibliotek utviklet av Google. Etter vår vurdering mer egnet for mobilskjermer enn for datamaskin.',
            reason_en: '',
          },
          {
            name: 'Gatsby',
            status: 'ADOPT',
            priority: false,
            reason_no: 'En god statisk-side-generator.',
            reason_en: '',
          },
          {
            name: 'Razzle (SSR for alle rammeverk)',
            status: 'TRIAL',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Tailwind',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Tailwind sparer en for mye komplisert CSS og holder bundle-størrelsen nede. De som bruker det er så fornøyde at vi kan anbefale det for de fleste.',
            reason_en: '',
          },
          {
            name: 'Svelte/ svelte-kit',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Svelte-kit er Svelte-alternativet til Next (der Next baserer seg på React). Apper skrevet i Svelte-kit blir mindre, men mengden tilgjengelige funksjoner er noe mindre i SvelteKit for tiden. Velg Next om du er i tvil.',
            reason_en: '',
          },
          {
            name: 'Fastify/koa (erstatning for Express)',
            status: 'TRIAL',
            priority: true,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'flutter',
            status: 'TEST',
            priority: false,
            reason_no:
              'Vår begrensede erfaring med Flutter for Web gjør at vi ønsker at utviklerne våre skal gjøre varsomme forsøk med det.',
            reason_en: '',
          },
          {
            name: 'preact',
            status: 'TEST',
            priority: false,
            reason_no:
              'Preact tilbyr en noe mindre kjøretidspakke enn det React gjør i bytte mot et begrenset funksjonalitetssett. Vi har lite erfaring med hvor begrensende dette er, og vil gjerne ha erfaringer.',
            reason_en: '',
          },
          {
            name: 'Angular',
            status: 'HOLD',
            priority: false,
            reason_no: 'Angular er ikke et alternativ for nyoppstartede prosjekter',
            reason_en: '',
          },
          {
            name: 'jQuery',
            status: 'HOLD',
            priority: false,
            reason_no: 'jQuery er ikke et alternativ for nyoppstartede prosjekter.',
            reason_en: '',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'CSS-in-JS',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'CSS-in-JS gjør kodebaser lettere å holde styr på, med en liten kjøretidskostnad for brukeren (fordi CSS-en må påføres av Javascript-kode). Bruk hvis brukerne dine kan tåle denne merkostnaden.',
            reason_en: '',
          },
          {
            name: 'Funksjonell stil når du kan, imperativt når du må',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Imperativ programmering er lettere for nybegynnere og tidvis mer effektivt, men erfarne programmerere bør legge seg til en funksjonell stil av hensyn til testbarhet og feilsøking.',
            reason_en: '',
          },
          {
            name: 'Serverless Hosting - Object Storage',
            status: 'ADOPT',
            priority: true,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'HTML over the wire',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Å rendre HTML på tjeneren og overføre den til klienten gir noen kjøretidsfordeler, men vi vil fortsatt se om gevinsten er verdt ulempene.',
            reason_en: '',
          },
          {
            name: 'i18n',
            status: 'ADOPT',
            priority: false,
            reason_no:
              '"Gjør appen klar for internasjonalisering fra første stund; få tjenester i Norge lever lenge uten å få en engelsk eller nynorsk variant i tillegg til bokmål."',
            reason_en: '',
          },
          {
            name: 'Immutable data',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Bruk teknikker som spreading og funksjoner Array.prototype.slice fremfor å mutere enkelte deler av objekter og arrays. Det gjør det lettere å hanskes med oppdateringer og å finne ut når endringer skjer.',
            reason_en: '',
          },
          {
            name: 'Lazy Loading',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Unngå å laste inn Javascript du ikke vet du trenger å bruke. Moderne bundlere og rammeverk inneholder mange metoder for å lazy-loade deler av en SPA, slik at den først lastes ned og parses av datamaskinen idet brukeren trenger den.',
            reason_en: '',
          },
          {
            name: 'prioriter feilhåndtering og beskrivelse',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Lag apper som krasjer sjelden, og fortell brukerne dine så godt du kan hva årsaken til krasjen er. Da blir brukerne fornøyde, og tilbakemeldingene du får bedre.',
            reason_en: '',
          },
          { name: 'Native Code', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Microfrontends',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Vi er usikre på om gevinstene ved mikro-frontender (uavhengighet) er verdt ulempene (organisatoriske merkostnader, vanskeligere prosjektoppsett og økt nedlastingsstørrelse). ',
            reason_en: '',
          },
          {
            name: 'Småbiblioteker av JS-onelinere',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Skriv heller koden selv eller kopier inn koden. Husk på å oppgi de lisensene du bruker!',
            reason_en: '',
          },
          {
            name: 'Global state',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Å sentralisere all tilstand i ett stort objekt, som i for eksempel Redux, var en trend for rundt fem år siden. Vi beveger oss nå bort fra det fordi apper (som regel) blir tregere av å gjøre oppdateringer inni ett objekt. Det er også vanskeligere for utviklerne å forholde seg til.',
            reason_en: '',
          },
          {
            name: 'Stale While Revalidate (frontend-caching)',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Å hente data med hooks, slik react-query og SWR tilbyr, fører til betydelig færer kodelinjer enn om man gjør det samme med redux. Caching blir betydelig lettere.',
            reason_en: '',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'Redux for React',
            status: 'HOLD',
            priority: true,
            reason_no:
              'Global tilstand er tregt for brukerne og vanskelig for utviklere å forholde seg til. Foretrekk mindre biter.',
            reason_en: '',
          },
          { name: 'MSW', status: 'ADOPT', priority: true, reason_no: '', reason_en: '' },
          {
            name: 'React Hook Form',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Dagens beste alternativ for skjemahåndtering i React: Raskt.',
            reason_en: '',
          },
          {
            name: 'Sentry / loggly',
            status: 'ADOPT',
            priority: true,
            reason_no: 'De beste alternativene for å logge feil som hender hos brukerne.',
            reason_en: '',
          },
          {
            name: 'Vite',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'En god, rask bundler som fungerer for de aller fleste prosjekter. Mindre konfigurering enn Webpack.',
            reason_en: '',
          },
          { name: 'Reach UI', status: 'TRIAL', priority: true, reason_no: '', reason_en: '' },
          {
            name: 'PostCSS',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Et modent verktøy som lar deg bruke den nyeste CSS-en uten å bekymre deg for brukernes opplevelse.',
            reason_en: '',
          },
          {
            name: 'Formik',
            status: 'HOLD',
            priority: true,
            reason_no:
              'Et mer ordrikt alternativ og tregere alternativ til React-Hook-Form som ikke oppdateres hyppig. ',
            reason_en: '',
          },
          {
            name: 'Webpack',
            status: 'KEEP',
            priority: true,
            reason_no: 'Et nødvendig onde mens verktøy som Vite modnes.',
            reason_en: '',
          },
          {
            name: 'Esbuild',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Esbuild er et raskere alternativ til Babel. Dårligere støtte for gammel syntaks, for eksempel CommonJS-moduler. ',
            reason_en: '',
          },
          {
            name: 'ESLint',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Eslint er bransjestandarden for å håndheve stilregler i ethvert prosjekt.',
            reason_en: '',
          },
          {
            name: 'Prettier',
            status: 'ADOPT',
            priority: false,
            reason_no: 'En rask formaterer med få konfigurasjonstilvalg.',
            reason_en: '',
          },
          {
            name: 'Fathom (personvernorientert Google Analytics-alternativ)',
            status: 'TRIAL',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Moment',
            status: 'HOLD',
            priority: false,
            reason_no: 'Et overdimensjonert bibliotek i rene kilobytes. Bruk heller date-fns.',
            reason_en: '',
          },
          {
            name: 'Underscore',
            status: 'HOLD',
            priority: false,
            reason_no: 'Bruk lodash i stedet.',
            reason_en: '',
          },
          {
            name: 'Selenium',
            status: 'HOLD',
            priority: false,
            reason_no: 'Bruk Cypress i stedet.',
            reason_en: '',
          },
          { name: 'Lodash', status: 'KEEP', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Snowpack',
            status: 'TEST',
            priority: false,
            reason_no: 'FJERNES vedlikeholdes ikke lenger',
            reason_en: '',
          },
          {
            name: 'web-components',
            status: 'TRIAL',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          { name: 'MDX', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          { name: 'wmr', status: 'TEST', priority: false, reason_no: 'FJERNES', reason_en: '' },
        ],
      },
    ],
  },
  cloud: {
    name: 'Cloud',
    link: 'cloud',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'Java',
            status: 'KEEP',
            priority: false,
            reason_no:
              'De største er fremdeles størst, og de siste årene har ny funksjonalitet kommet mye raskere',
            reason_en:
              'The most used language amongst our customers, and new features has been added more quickly recently',
          },
          {
            name: 'CloudFormation',
            status: 'KEEP',
            priority: false,
            reason_no:
              'For AWS er dette det best støttede IaC-språket, selv om Terraform er bedre hvis du ønsker gjenbruk mellom skyer eller for generiske tjenester',
            reason_en:
              'For AWS, this is the best supported IaC language, although Terraform is better if you want reuse between clouds or for generic services',
          },
          { name: 'Javascript', status: 'KEEP', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Kotlin',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'For alle nye prosjekter på JVM anbefaler vi at du vurderer Kotlin, da det er et mer ergonomisk språk, særlig i et miljø som får god effekt av noen av Kotlins sterkeste punkter, som immutabilitet, coroutines og sterk støtte for asynkrone APIer',
            reason_en:
              "For all new projects on the JVM, we recommend that you consider Kotlin, as it is a more ergonomic language, especially in an environment that benefits from some of Kotlin's strongest points, such as immutability, coroutines, and strong support for asynchronous APIs",
          },
          {
            name: 'Typescript',
            status: 'ADOPT',
            priority: false,
            reason_no:
              "Javascript med statiske typer, og som krever en mer moderne stack. What's not to like?",
            reason_en:
              "Javascript with static types, and which requires a more modern stack. What's not to like?",
          },
          {
            name: 'Python',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Python er en av de raskeste måtene å prototype avansert funksjonalitet, eller lage mikrotjenester for FaaaS-arkitektur på. Ytelse blir sjelden et problem i praksis, men for tjenester hvor man vet at dette kan bli kritisk bør man kanskje kjøre litt ytelsestesting i prototyping-fasen for å være sikker.',
            reason_en:
              'Python is one of the fastest ways to prototype advanced functionality, or create microservices for FaaaS architecture. Performance rarely becomes a problem in practice, but for services where you know this can be critical, you should perhaps run some performance testing in the prototyping phase to be sure.',
          },
          {
            name: 'Go',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Et moderne språk med et etter hvert temmelig solid økosystem. La deg ikke lure av hvor "enkelt" språket er - kompleksiteten ligger rett under overflaten, og nesten alt er mulig. Kompilasjon til statiske binærfiler gjør dette til et spesielt godt valg for FaaS og mikrotjenester.',
            reason_en:
              'A modern language with an increasingly solid ecosystem. Don\'t be fooled by how "simple" the language is - the complexity lies just beneath the surface, and almost anything is possible. Compiling to static binaries makes this a particularly good choice for FaaS and microservices.',
          },
          {
            name: 'Rust',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Rust er kanskje det beste språket for å skrive "sikker" funksjonalitet. Du vet alltid hvor minnet ditt er, og hva som ligger der. (Hvis du bruker språket riktig.) Merk at selv om økosystemet er solid og har enormt god støtte fra ildsjeler, er det fremdeles krevende å sette seg inn i Rust, og det er i praksis veldig vanskelig for ett team å jobbe alene med Rust i en organisasjon som er fokusert på et annet språk..',
            reason_en:
              'Rust is perhaps the best language for writing "safe" functionality. You always know where your memory is and what is there. (If you use the language correctly.) Note that although the ecosystem is solid and has tremendously good support from the community, it is still a demanding language to learn, and it is practically very difficult for one team to work alone with Rust in an organization that is focused on another language..',
          },
          {
            name: 'Scala',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Scalas utvikling har ikke stoppet, og Scala 3.0 kom ut for ikke så lenge siden. Likevel er det ikke mulig å se bort fra at Kotlin har tatt over rollen som "utfordreren på JVM", og vi anbefaler ikke nye prosjekter å bruke Scala.',
            reason_en:
              'Scala\'s development never stopped, and Scala 3.0 was released not too long ago. Nevertheless, it is not possible to ignore that Kotlin has taken over the role of the "challenger on the JVM", and we do not recommend new projects to use Scala.',
          },
        ],
      },
      {
        name: 'Technologies',
        id: 'technologies',
        items: [
          {
            name: 'VMs',
            status: 'KEEP',
            priority: true,
            reason_no:
              'Det er vanskelig å slå ytelsen ved å bare kjøre appen på alle kjerner og all minne du har tilgjengelig. For monolitter og krevende tjenester som ikke er lette å kjøre i parallel er VMer derfor fremdeles et godt valg. ',
            reason_en:
              'It is difficult to beat the performance by just running the app on all the cores and all the memory you have available. For monoliths and demanding services that are not easy to drive in parallel, Vmer is therefore still a good choice.',
          },
          {
            name: 'Google Compute Engine',
            status: 'KEEP',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Kafka',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Blant alle de skynøytrale køplattformene, er Kafka den som har fått mest oppmerksomhet. Det er enkelt å se hvorfor - den kombinerer funksjonalitet de andre ikke har, med bred dekning blant PaaS leverandører og ikke minst en bevist ytelse og skalering over tid.',
            reason_en:
              'Among all the cloud-neutral queuing platforms, Kafka is the one that has received the most attention. It is easy to see why - it combines functionality that the others do not have, with broad coverage among PaaS providers and not least a proven performance and scaling over time.',
          },
          {
            name: 'Skyplattformenes egne køtjenester',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Selv om Kafka er en populær plattform som er forholdsvis enkel og drifte, har den fremdeles en vedlikeholdsbyrde som ikke er å kimse av. Dette slipper du unna dersom du bruker skyleverandørenes egen stack. Disse er også nesten alltid billigere, selv om de kan være litt mindre fleksible enn Kafka.',
            reason_en:
              "Although Kafka is a popular platform that is relatively simple and easy to operate, it still has a maintenance burden that cannot be ignored. You avoid this if you use the cloud providers' own stack. These are also almost always cheaper, although they may be slightly less flexible than Kafka.",
          },
          {
            name: 'AWS API Gateway',
            status: 'ADOPT',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'FaaS (Lambda/Google Cloud Functions, Cloud Run)',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Det er ingenting som er mer befriende enn å bare lage en liten kodebit som gjør én enkel ting, og så bare la den leve sitt eget liv uten at den koster deg noe i drift eller teknisk gjeld. Husk bare å oppdatere dependencies, helst automatisk.',
            reason_en:
              'There is nothing more liberating than just creating a small piece of code that does one simple thing, and then just letting it live its own life without costing you anything in operation or technical debt. Just remember to update dependencies, preferably automatically.',
          },
          {
            name: 'AWS CloudFront',
            status: 'ADOPT',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'AWS DynamoDB',
            status: 'ADOPT',
            priority: false,
            reason_no:
              "En uendelig skalerbar, billig og rask dokumentdatabase. What's not to like? Vel, skjemasystemet gjør det litt vanskelig å lage enkle søk, og er veldig tregt å kjøre spørringer på alle radene. Likevel er det flere fordeler enn ulemper her!",
            reason_en:
              "An infinitely scalable, cheap and fast document database. What's not to like? Well, the form system makes it a bit difficult to create simple queries, and is very slow to run queries on all the rows. Still, there are more pros than cons here!",
          },
          {
            name: 'Google BigQuery',
            status: 'ADOPT',
            priority: false,
            reason_no:
              "Den ubetvilte standarden på spørringer i big data. Du må jobbe hardt for å få til noe tilsvarende selv, og selv Azures og AWS' tjenester kan ikke måle seg. Med BigQuery ML og Looker kan du også gjøre ting du ellers må bruke kombinasjoner av flere tjenester for å få til.",
            reason_en:
              "The default standard for big data queries. You have to work hard to build something similar yourself, and even Azure's and AWS' services cannot compare. With BigQuery ML and Looker, you can also do things that you would otherwise have to use combinations of several services to achieve.",
          },
          {
            name: 'AWS RDS',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Hvorfor drifte server når du bare kan opprette en database og koble til med en gang? La noen andre bry seg om vedlikehold, patching og slikt. De er sikkert flinkere enn deg uansett.',
            reason_en:
              "Why run a server when you can just create a database and connect right away? Let someone else take care of maintenance, patching and such. They're probably better at it than you anyway.",
          },
          {
            name: 'Google Storage',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Mens AWS S3 har vært på markedet lenger, har Google Storage et minst like bra tilbud. Det er også billigere, og snart kan du lagre ting på norsk jord.',
            reason_en:
              'While AWS S3 has been on the market longer, Google Storage has at least as good an offering. It is also cheaper, and soon you will be able to store things on Norwegian soil.',
          },
          { name: 'AWS Athena', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          { name: 'AWS Cognito', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          { name: 'Databricks', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Micronaut',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Et lettere rammeverk enn Spring Boot, med mange av de samme funksjonene. I tillegg kan du kompilere koden med GraalVM og ende opp med et Dockerimage som starter på noen få millisekunder',
            reason_en:
              'A lighter framework than Spring Boot, with many of the same features. In addition, you can compile the code with GraalVM and end up with a Dockerimage that starts in a few milliseconds',
          },
          { name: 'AWS Redshift', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          { name: 'AWS X-Ray', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Google BigQuery ML',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Med BigQuery ML kan du bruke det kjente BigQuery interfacet og de samme datasettene til å seede ML modeller som du senere kan bruke i produksjon overalt. Dette kan bli dyrt, men det kan også gjøre ML tilgjengelig for dataanalytikere som ellers ville kviet seg for å lære seg andre verktøy.',
            reason_en:
              'With BigQuery ML, you can use the familiar BigQuery interface and the same data sets to seed ML models that you can later use in production everywhere. This can be expensive, but it can also make ML accessible to data analysts who would otherwise be reluctant to learn other tools.',
          },
          { name: 'AWS SageMaker', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          { name: 'AWS Glue', status: 'TRIAL', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Google Anthos',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Anthos er Googles PaaS løsning for Kubernetes, og kombinerer GKE med Anthos Service Mesh (basert på Istio) og en rekke støtteverktøyer. Vi har god erfaring med dette som on-prem skyplattform, og anbefaler at alle som bygger hybridsky evaluerer dette.',
            reason_en:
              "Anthos is Google's PaaS solution for Kubernetes, and combines GKE with Anthos Service Mesh (based on Istio) and a number of support tools. We have good experience with this as an on-prem cloud platform, and recommend that everyone who builds a hybrid cloud evaluates this.",
          },
          {
            name: 'Cloudflare Workers',
            status: 'TEST',
            priority: false,
            reason_no:
              'En veldig billig FaaS-løsning som lover enklere administrasjon. "You write code. We handle the rest." lover de, og vi håper de har rett, for AWS Lambda krever veldig mye administrasjon for å få til IAM, databasetilkoblinger osv.',
            reason_en:
              'A very cheap FaaS solution that promises easier administration. "You write code. We handle the rest." they promise, and we hope they\'re right, because AWS Lambda requires a lot of administration to get IAM, database connections, etc.',
          },
          {
            name: 'AWS Aurora Serverless',
            status: 'TEST',
            priority: false,
            reason_no:
              'Billig og enkel Postgres/MySQL-kompatibel database. Serverless, så betaler bare for bruk og lagring. Dette kan man spare mye på. Forhåpentligvis tar dette over rollen til "vanlig" RDS.',
            reason_en:
              'Cheap and simple Postgres/MySQL compatible database. Serverless, so you only pay for use and storage. You can save a lot on this. Hopefully this will outcompete RDS.',
          },
          {
            name: 'AWS ECS Anywhere',
            status: 'TEST',
            priority: false,
            reason_no:
              'AWS versjon av Anthos, men uten den sikkerheten man får via Service Mesh. Likevel interessant for de som allerede har bestemt seg for å bruke AWS på sky.',
            reason_en:
              'AWS version of Anthos, but without the security you get via Service Mesh. Still interesting for those who have already decided to use AWS on cloud.',
          },
          {
            name: 'AWS ECS',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Folket har talt - Kubernetes har tatt over på godt og vondt. Vi anbefaler å bruke EKS på alle nye prosjekter.',
            reason_en:
              'The people have spoken - Kubernetes has taken over for better or for worse. We recommend using EKS on all new projects.',
          },
          {
            name: 'AWS Lightsail',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Folket har talt - Kubernetes har tatt over på godt og vondt. Vi anbefaler å bruke EKS på alle nye prosjekter.',
            reason_en:
              'The people have spoken - Kubernetes has taken over for better or for worse. We recommend using EKS on all new projects.',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'CI/CD',
            status: 'KEEP',
            priority: false,
            reason_no:
              'CI/CD har vokst seg til en gigantisk bevegelse, og selv om det kan være vanskelig å sette seg inn i de forskjellige verktøyene og hva ting EGENTLIG gjør - er det kommet for å bli. CI/CD gjort riktig sikrer både utviklingshastigheten og kvaliteten på koden via testing.',
            reason_en:
              "CI/CD has grown into a giant movement, and although it can be difficult to get to grips with the various tools and what things REALLY do - it's here to stay. CI/CD done right ensures both the speed of development and the quality of the code via testing.",
          },
          {
            name: 'Cloud Native Development',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Skyen har kommet for å bli. Selv om du ikke jobber mot skyen i dag, vil du antageligvis gjøre det i fremtiden. Fordelene ved å bruke Cloud Native teknologier i dag er at du både vil være forberedt på fremtiden, og at det du lager antageligvis vil kunne brukes lenger. Dessverre er dette vanskelig å gjøre i en umoden organisasjon...',
            reason_en:
              "The cloud is here to stay. Even if you don't work against the cloud today, you probably will in the future. The advantages of using Cloud Native technologies today are that you will both be prepared for the future, and that what you create will probably be able to be used for longer. Unfortunately, this is difficult to do in an immature organization…",
          },
          {
            name: 'Event-driven development',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Asynkron og eventbasert utvikling (og datamodellering) har bevist sin verdi - og ingen steder er dette viktigere enn på skyen. Dette er den beste måten å bli kvitt gamle paradigmer på, men ikke prøv å skrive om en monolitt! Bytt heller ut deler av monolitten med FaaS-funksjoner som kommuniserer via køer. Lykke til!',
            reason_en:
              "Asynchronous and event-based development (and data modeling) has proven its value - and nowhere is this more important than in the cloud. This is the best way to get rid of old paradigms, but don't try to rewrite a monolith! Instead, replace parts of the monolith with FaaS functions that communicate via queues. Good luck!",
          },
          {
            name: 'Event sourcing',
            status: 'ADOPT',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Infrastructure as Code',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Unngå manuelle steg, og bruk Terraform eller CloudFormation/CDK. Automatisk repeterbare handlinger gjør det fantastisk mye enklere å sikre at den koden du tester lokalt på din maskin faktisk vil fungere på skyen også!',
            reason_en:
              'Avoid manual steps and use Terraform or CloudFormation/CDK. Automatically repeatable actions make it incredibly much easier to ensure that the code you test locally on your machine will actually work in the cloud too!',
          },
          {
            name: 'DORA Metrics',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Flere og flere verktøy i CI/CD-sfæren gjør det nå mulig å måle disse fire metrikkene for å måle utviklingshastighet og driftsstabilitet. Problemet er at det ikke finnes noen enkel måte å samle inn alle metrikkene og vise de på samme sted. Mens vi fremdeles venter på dette universalverktøyet (eller en standard som gjør det enklere å lage slike verktøy) kan vi i hvert fall samle inn noen av tallene manuelt med jevne mellomrom og sjekke om det faktisk går fremover. ',
            reason_en:
              "More and more tools in the CI/CD sphere now make it possible to measure these four metrics to measure development speed and operational stability. The problem is that there is no easy way to collect all the metrics and display them in one place. While we're still waiting for this universal tool (or a standard that makes it easier to create such tools) we can at least collect some of the numbers manually on a regular basis and check if it's actually moving forward.",
          },
          {
            name: 'Identity and Access Management',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'IAM-systemene til skyleverandørene er dessverre veldig krevende, og ofte må selv gruppeledere på forholdsvis lavt nivå forholde seg til disse. Likevel er det helt kritisk at dette verktøyet brukes riktig. En stor andel sikkerhetsproblemer stammer fra uriktig bruk av IAM-systemet, eller rett og slett en misforståelse i hvilke rettigheter som bør gis i hvilke situasjoner. Skyleverandørene har i det siste fått øynene opp for automatisk varsling av mulige feilkonfigurasjoner, og det er en stor hjelp.',
            reason_en:
              'Unfortunately, the IAM systems of the hyperscalers are very demanding, and often even group leaders at a relatively low level have to deal with these. Nevertheless, it is absolutely critical that this tool is used properly. A large proportion of security issues derived from the incorrect use of the IAM system, or simply a misunderstanding in which rights should be given in which situations. The hyperscalers have recently caught the eye for automatic notification of possible error configurations, which is a great help.',
          },
          {
            name: 'NoOps',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'SaaS som eneste måte å kjøre programvare på er foreløpig en utopi for veldig mange, men hvis du har muligheten til å eliminere all drift er dette noe du absolutt bør undersøke. ',
            reason_en:
              'Saas as the only way to run software is currently an utopia for many, but if you have the opportunity to eliminate all operations, this is something you should definitely investigate.',
          },
          {
            name: 'SecOps',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Sikkerhet bør være en kjernedel av utviklingspraksisen din. I stedet for et eksternt team av "sikkerhetsekspert" som sitter og skaper best practices for hele selskapet, bør hele teamet ditt bli utdannet til å bruke best practices for ditt felt når du lager produktet ditt. Den beste praksis for en backend-utvikler er ikke den samme som beste praksis for en produkteier, og ethvert sett med "best practices som prøver å dekke begge vil per definisjon være mindre enn best for begge to.',
            reason_en:
              'Security should be a core part of your development practice. Instead of an external team of "security expert" who sit around creating best practices for the entire company, your entire team should be educated to use the best practices for your field when creating your product. The best practices for a backend developer are not the same as the best practices for a product manager, and any set of "best practices" that try to cover both will by definition be less than best for either.',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'Docker Desktop',
            status: 'KEEP',
            priority: true,
            reason_no:
              'Docker har med sin overgang til ny lisensmodell gjort det vanskelig å uforbeholdent anbefale å bruke Docker Desktop. Samtidig har Kubernetes byttet ut Docker med ContainerD, noe som gjør firmaet Docker mindre og mindre relevant. Samtidig er det enda ikke en god erstatter for Docker Desktop for utvikling på egne maskiner, da de eksisterende verktøyene har en mer umoden brukeropplevelse, og ofte mangler funksjonalitet. Vi ser frem til den dagen vi har et verktøy som kan ta over her, men anbefaler ingen å bytte enda.',
            reason_en:
              'With its transition to a new license model, Docker has made it difficult to unreservedly recommend using Docker Desktop. At the same time, Kubernetes has replaced Docker with ContainerD, making the company Docker less and less relevant. At the same time, it is not yet a good replacement for Docker Desktop for development on your own machines, as the existing tools have a more immature user experience, and often lack functionality. We look forward to the day when we have a tool that can take over here, but do not recommend anyone to switch just yet.',
          },
          {
            name: 'CircleCI',
            status: 'KEEP',
            priority: true,
            reason_no:
              'CircleCI er fremdeles et av de SaaS-tjenestene for CI som har best økosystem, dokumentasjon og gjennomføringsevne. Github Actions er en sterk utfordrer, og vi mistenker at siste ord ikke er sagt - men CircleCI er fremdeles best her.',
            reason_en:
              'CircleCI is still one of the SaaS services for CI that has the best ecosystem, documentation and implementation capabilities. Github Actions is a strong contender, and we suspect that the last word has not been said - but CircleCI is still the best here.',
          },
          {
            name: 'Terraform',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Terraform er fremdeles det beste verktøyet for de fleste tilfeller. Med mindre du er tungt investert i AWS som eneste skyplattform, er dette alltid verktøyet du burde bruke. ',
            reason_en:
              'Terraform is still the best tool for most cases. Unless you are heavily invested in AWS as the only cloud platform, this is always the tool you should use.',
          },
          {
            name: 'Cloud Secret Management tools',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Nøkler og sertifikater som sjekkes inn i git-repoet er en klisjé, men det skjer fremdeles. Og det er ikke den eneste måten slike ting blir lekket på. Ved riktig bruk av Hashicorp Vault eller skyleverandørenes egne verktøy kan du unngå å bruke nøkler og sertifikater manuelt, og i stedet konfigurere (via IaC!) CI/CD pipelinen til selv å ta seg av opprettelse, fornyelse og rettighetsfordeling selv. Slik slipper du både å lagre nøkler på laptopen din, og i det hele tatt å tenke på nøkler som en del av utviklingsprosessen!',
            reason_en:
              "Keys and certificates checked into the Git repos are a cliché, but it still happens. And that's not the only way such things are leaked. When using Hashicorp Vault or the cloud suppliers' own tools, you can avoid using keys and certificates manually, and instead configure (via IaC!) the CI/CD pipelines to take care of creation, renewal and cascading of correct usage attributes yourself. This way, you don't have to store any keys on your laptop, or even handle keys as part of the development process!",
          },
          {
            name: 'Cloud Logging',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Oppbevaring og søk i logger er tungvint, vanskelig og dyrt. Alle skyleverandørene har nå moderne og beviste verktøy, og selv AWS CloudWatch begynner å bli bra nok - på tross av at det fremdeles praktisk talt er umulig å søke på tvers av alle logger. Så lenge du passer på at ingen sensitiv data blir logget er det ikke lenger noen god grunn til å behandle logger spesielt, og det er både enklere og i mange tilfeller billigere å bare legge også denne delen av driftshverdagen over på spesialistene, og fokusere på vår kjernefunksjonalitet i stedet.',
            reason_en:
              'Storage and searches of logs are cumbersome, difficult and expensive. All cloud suppliers have now mature and proven tools, and even AWS Cloudwatch is starting to be good enough - despite the fact that it is still practically impossible to search across all logs. As long as you take care that no sensitive data is logged there is no longer any good reason to treat logs as sensitive data, and it is both simpler and in many cases cheaper to just throw this burden over to the specialists and focus on our core business instead.',
          },
          {
            name: 'Managed Kubernetes',
            status: 'ADOPT',
            priority: false,
            reason_no:
              "Ikke drift Kubernetes selv. Just don't. Hvis du absolutt må ha noe on-prem, bruk Google Anthos eller noe lignende.",
            reason_en:
              "Do not operate Kubernetes yourself. Just don't. If you absolutely need something on-prem, use Google Anthos or something similar.",
          },
          {
            name: 'Github Actions',
            status: 'TRIAL',
            priority: false,
            reason_no:
              "This practically new Github feature has had an enormous growthcurve, and it's now extremely mature for its age. The ecosystem is huge, and what previously had to be done through workarounds has been simplified or simply added as default features. Everything Just Works now, and it's on the way to becoming the best CI tool. ",
            reason_en: '#REF!',
          },
          {
            name: 'Google Cloud Composer/Apache Airflow',
            status: 'TRIAL',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Google Datastudio',
            status: 'TRIAL',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Google Dataflow/Apache Beam',
            status: 'TRIAL',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'AWS CDK',
            status: 'TEST',
            priority: true,
            reason_no:
              'For de som brukes AWS er CDK på mange måter bedre enn Terraform. Hovedsalgsargumentet er at dette er APIer for det språket du (forhåpentligvis) bruker til å utvikle produktet ditt uansett, slik at du slipper å lære deg HCL eller jobbe med deklarativ kode i YAML.',
            reason_en:
              "For those used AWS, CDK is in many ways better than Terraform. The main selling point is that these are APIs for the language you (hopefully) use to develop your product anyway, so you don't have to learn HCL or work with declarative code in Yaml.",
          },
          { name: 'DBT', status: 'TEST', priority: false, reason_no: '', reason_en: '' },
          {
            name: 'Great Expectations',
            status: 'TEST',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          {
            name: 'Serverless Framework',
            status: 'HOLD',
            priority: false,
            reason_no: '',
            reason_en: '',
          },
          { name: 'Berglas', status: 'HOLD', priority: false, reason_no: '', reason_en: '' },
          { name: 'Vault', status: 'HOLD', priority: false, reason_no: '', reason_en: '' },
        ],
      },
    ],
  },
  aidata: {
    name: 'Aidata',
    link: 'aidata',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'Python',
            status: 'KEEP',
            priority: true,
            reason_no: 'Hovedspråket i datadomenet.',
            reason_en: 'Main language of the data domain.',
          },
          {
            name: 'Kotlin',
            status: 'KEEP',
            priority: false,
            reason_no: 'Dominant JVM språk.',
            reason_en: 'Dominant JVM language.',
          },
          {
            name: 'Julia',
            status: 'TEST',
            priority: false,
            reason_no: 'Populært data språk.',
            reason_en: 'Popular data language.',
          },
          {
            name: 'R',
            status: 'TEST',
            priority: false,
            reason_no: 'Populært data språk.',
            reason_en: 'Popular data language.',
          },
          {
            name: 'SQL',
            status: 'KEEP',
            priority: false,
            reason_no: 'Default språk for data.',
            reason_en: 'Default language for data.',
          },
        ],
      },
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'DBT',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Høy momentum data rammeverk.',
            reason_en: 'High momentum data framework.',
          },
          {
            name: 'Airflow',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industri standard orkestrering.',
            reason_en: 'Industry standard orchestration.',
          },
          {
            name: 'Great Expectations',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industri-ledende data quality rammeverk.',
            reason_en: 'Industry leading data quality framework.',
          },
          {
            name: 'Pytorch',
            status: 'KEEP',
            priority: false,
            reason_no: 'Viktig ML lib.',
            reason_en: 'Important ML lib.',
          },
          {
            name: 'XGBoost',
            status: 'KEEP',
            priority: false,
            reason_no: 'Viktig ML lib.',
            reason_en: 'Important ML lib.',
          },
          {
            name: 'Scikit-Learn',
            status: 'KEEP',
            priority: false,
            reason_no: 'Viktig ML lib.',
            reason_en: 'Important ML lib.',
          },
          {
            name: 'Tensorflow',
            status: 'KEEP',
            priority: true,
            reason_no: 'Viktig ML lib.',
            reason_en: 'Important ML lib.',
          },
          {
            name: 'Pandas',
            status: 'KEEP',
            priority: false,
            reason_no: 'Viktig python data rammeverk.',
            reason_en: 'Important python data framework.',
          },
          {
            name: 'Keras',
            status: 'KEEP',
            priority: false,
            reason_no: 'Viktig ML lib.',
            reason_en: 'Important ML lib.',
          },
          {
            name: 'Prefect',
            status: 'TEST',
            priority: false,
            reason_no: 'Orkestrering utfordrer med bedre design.',
            reason_en: 'Orchestration challenger.',
          },
          {
            name: 'Dagster',
            status: 'TEST',
            priority: false,
            reason_no: 'Orkestrering utfordrer med bedre design.',
            reason_en: 'Orchestration challenger.',
          },
          {
            name: 'DataHub',
            status: 'TEST',
            priority: false,
            reason_no: 'Datakatalog rammeverk with momentum.',
            reason_en: 'Data catalog framework with momentum.',
          },
          {
            name: 'Spark on Kubernetes',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Høy momentum rammeverk.',
            reason_en: 'High momentum framework.',
          },
          {
            name: 'Delta Live Tables',
            status: 'TRIAL',
            priority: true,
            reason_no: 'Høy momentum rammeverk on ledende platform.',
            reason_en: 'High momentum framework on leading platform.',
          },
          {
            name: 'Nansen',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Datakatalog rammeverk med momentum.',
            reason_en: 'Data catalog framework with momentum.',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'AutoML',
            status: 'TEST',
            priority: false,
            reason_no: 'Viktig ML paradigm.',
            reason_en: 'Important ML paradigm.',
          },
          {
            name: 'GPT(-3)',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy momentum ML model.',
            reason_en: 'High momentum ML model.',
          },
          {
            name: 'Support Vector Machines',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Viktig ML paradigm.',
            reason_en: 'Important ML paradigm.',
          },
          {
            name: 'Data Mesh',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Høy momentum data platform paradigm.',
            reason_en: 'High momentum data platform paradigm.',
          },
          {
            name: 'ETL',
            status: 'KEEP',
            priority: true,
            reason_no: 'Central data platform paradigm.',
            reason_en: 'Central data platform paradigm.',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'AWS Sagemaker',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Høy-fokus AWS ML stack.',
            reason_en: 'High focus AWS ML stack.',
          },
          {
            name: 'Snowflake',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Industri-ledende DWH.',
            reason_en: 'Industry leading DWH.',
          },
          {
            name: 'Databricks',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industri-ledende multi cloud data platform.',
            reason_en: 'Industry leading multi cloud data platform.',
          },
          {
            name: 'AWS Sagemaker Model Registry',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Høy-fokus AWS ML service.',
            reason_en: 'High focus AWS ML service.',
          },
          {
            name: 'Pandas for Spark 3.0',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Ledende python data rammeverk.',
            reason_en: 'Leading python data framework.',
          },
          {
            name: 'EMR',
            status: 'KEEP',
            priority: false,
            reason_no: 'Kamp-testet AWS Spark data platform.',
            reason_en: 'Battle tested AWS Spark data platform.',
          },
          {
            name: 'Managed Airflow',
            status: 'KEEP',
            priority: false,
            reason_no: 'Managed version of industry standard orchestrator.',
            reason_en: 'Managed version of industry standard orchestrator.',
          },
          {
            name: 'BigQuery',
            status: 'KEEP',
            priority: true,
            reason_no: 'Kamp-testet cloud DB.',
            reason_en: 'Battle tested cloud DB.',
          },
          {
            name: 'Apache Spark',
            status: 'KEEP',
            priority: true,
            reason_no: 'Ledende data rammeverk.',
            reason_en: 'Leading data framework.',
          },
          {
            name: 'Jupyterhub',
            status: 'KEEP',
            priority: true,
            reason_no: 'Høy momentum notebook service open source.',
            reason_en: 'High momentum notebook service open source.',
          },
          {
            name: 'Jupyter notebooks',
            status: 'KEEP',
            priority: true,
            reason_no: 'Ledende notebook rammeverk.',
            reason_en: 'Leading notebook framework.',
          },
          {
            name: 'AWS Feature store',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus AWS ML service.',
            reason_en: 'High focus AWS ML service.',
          },
          {
            name: 'AWS MLOps',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus AWS ML service.',
            reason_en: 'High focus AWS ML service.',
          },
          {
            name: 'AWS Sagemaker Pipelines',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus AWS ML service.',
            reason_en: 'High focus AWS ML service.',
          },
          {
            name: 'AWS Sagemaker studio',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus AWS ML service.',
            reason_en: 'High focus AWS ML service.',
          },
          {
            name: 'AWS Sagemaker Autopilot',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus AWS ML service.',
            reason_en: 'High focus AWS ML service.',
          },
          {
            name: 'Snowpark',
            status: 'TEST',
            priority: false,
            reason_no: 'Python environment on Snowflake.',
            reason_en: 'Python environment on Snowflake.',
          },
          {
            name: 'IBM AI Fairness 360',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus AI Fairness rammeverk.',
            reason_en: 'High focus AI Fairness framework.',
          },
          {
            name: 'Vertex AI (Google)',
            status: 'TEST',
            priority: false,
            reason_no: 'Høy-fokus GCP ML service.',
            reason_en: 'High focus GCP ML service.',
          },
          {
            name: 'Dataiku',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Innovative and mature multi cloud data platform.',
            reason_en: 'Innovative and mature multi cloud data platform.',
          },
          {
            name: 'Unity Catalog',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Data governance and access mgmt data catalog.',
            reason_en: 'Data governance and access mgmt data catalog.',
          },
          {
            name: 'BigQuery ML',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Høy-fokus GCP ML service.',
            reason_en: 'High focus GCP ML service.',
          },
        ],
      },
    ],
  },
  backend: {
    name: 'Backend',
    link: 'backend',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'Kotlin',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Effektiviserer og muliggjør tryggere standard utvikling. Enklere å skrive bra, vedlikeholdseffektiv kode. Høy grad av adopsjon hos utviklere og kunder',
            reason_en:
              'Streamlines and enables safer standard development. Easier to write good, maintainable code. High degree of adoption by developers and customers',
          },
          {
            name: 'Clojure',
            status: 'TEST',
            priority: false,
            reason_no: 'Kan vurderes der funksjonell stil og samtidighet er viktig',
            reason_en: 'Can be considered where functional style and concurrency are important',
          },
          {
            name: 'C#',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert og er en bransjestandard',
            reason_en: 'Well established and an industry standard',
          },
          {
            name: 'Python',
            status: 'KEEP',
            priority: true,
            reason_no: 'Veletablert og er en bransjestandard, i tillegg velegnet til ML/AI',
            reason_en: 'Well established and an industry standard, also well suited for ML/AI',
          },
          {
            name: 'Java',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert og er en bransjestandard',
            reason_en: 'Well established and an industry standard',
          },
          {
            name: 'Ruby',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Veletablert for startups og effektiv for kjapp utvikling av webapplikasjoner',
            reason_en:
              'Well-established for startups and efficient for rapid development of web applications',
          },
          {
            name: 'Rust',
            status: 'TRIAL',
            priority: true,
            reason_no: 'Et spennende språk med meget god ytelse. Stort nedslagsfelt',
            reason_en: 'An exciting language with very good performance. Many areas of use',
          },
          {
            name: 'GraphQL',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Fleksibel og god måte å hente data på, gjør det enkelt å utforske apier.',
            reason_en:
              'Enables a flexible and good way to retrieve data which makes it easy to explore APIs.',
          },
          {
            name: 'Golang',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Enkelt språk å lære seg. Velegnet for CRUD apps. Tiltar i popularitet hos kunder.',
            reason_en:
              'Easy language to learn. Suitable for CRUD apps. Increasing in popularity with customers.',
          },
          {
            name: 'Scala',
            status: 'HOLD',
            priority: false,
            reason_no:
              'Bra potensiale, men i ferd med å bli upopulært. Lite nyvinning, og lite utbredt hos kunder. Stor fleksibilitet gjør at språket støtter mange løsningsstrategier som gjør det vanskelig å skrive kode som nye utviklere raskt kan sette seg inn i.',
            reason_en:
              'Good potential, but becoming unpopular. Little innovation, and not much use among customers. Great flexibility means that the language supports many solution strategies that make it difficult to write code that new developers can quickly get used to.',
          },
        ],
      },
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'Mockk',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Et av de beste mock-rammeverkene på markedet. Stor fleksibilitet og funksjonalitet som dekker vanlige bruksområder. Særdeles bra på verifikasjon. Full støtte for co-routines.',
            reason_en:
              'One of the best mocking frameworks on the market. Great flexibility and functionality that covers common areas of use. Particularly good at verification. Full support for co-routines.',
          },
          {
            name: 'ASP.NET Core',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Veletablert og er en bransjestandard',
            reason_en: 'Well established and an industry standard',
          },
          {
            name: '.NET 5.0+',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Veletablert og er en bransjestandard',
            reason_en: 'Well established and an industry standard',
          },
          {
            name: 'Rocket',
            status: 'TEST',
            priority: false,
            reason_no: 'Enkelt og spennende Web rammeverk for Rust',
            reason_en: 'Simple and exciting Web framework for Rust',
          },
          {
            name: 'Actix',
            status: 'TEST',
            priority: false,
            reason_no: 'Enkelt og spennende Web rammeverk for Rust',
            reason_en: 'Simple and exciting Web framework for Rust',
          },
          {
            name: 'Exposed',
            status: 'TEST',
            priority: false,
            reason_no:
              'JetBrains eget ORM for Kotlin. Utvikles raskt og vil trolig bli standardvalg for Kotlin når det blir stabilt.',
            reason_en:
              "JetBrain's own ORM for Kotlin. It is being developed quickly and will probably become the standard choice for Kotlin when it becomes stable.",
          },
          {
            name: 'Pandas',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert databehandlingsrammeverk for Python.',
            reason_en: 'Well-established computing framework for Python.',
          },
          {
            name: 'Django',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert webrammeverk/bransjestandard for Python',
            reason_en: 'Well-established web framework/industry standard for Python',
          },
          {
            name: 'Spring Boot',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert bransjestandard',
            reason_en: 'Well established and an industry standard',
          },
          {
            name: 'Hibernate',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert bransjestandard',
            reason_en: 'Well established and an industry standard',
          },
          {
            name: 'Quarkus',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Spennende og lovende full-stack rammeverk for kubernetes native utvikling',
            reason_en:
              'Exciting and promising full-stack framework for kubernetes native development',
          },
          {
            name: 'Micronaut',
            status: 'TRIAL',
            priority: true,
            reason_no:
              'Spennende og lovende rammeverk for mikrotjenester og serverless applikasjoner',
            reason_en:
              'Exciting and promising framework for microservices and serverless applications',
          },
          {
            name: 'WebFlux',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Rammeverk for async springapplikasjoner. Et spennende alternativ til Spring MVC. Bygget på Reactive.',
            reason_en:
              'Framework for async spring applications. An exciting alternative to Spring MVC. Built on Reactive.',
          },
          {
            name: 'NodeJS',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Et godt alternativ for BFF (backend for frontend). Passer høyt i stacken. Velegnet til applikasjoner som må tåle høy last, men med lavt cpu-forbruk.',
            reason_en:
              'A good option for BFF (backend for frontend). A good fit in the top section of the stack. Suitable for applications that must handle a high load, but with low cpu consumption.',
          },
          {
            name: 'SQLAlchemy ORM',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Veletablert ORM rammeverk i python applikasjoner',
            reason_en: 'Well-established ORM framework for python applications',
          },
          {
            name: 'Koin',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Standard dependency injection rammeverk for Android-utvikling. På vei til å bli mer egnet for backendutvikling',
            reason_en:
              'Standard dependency injection framework for Android development. On the way to becoming more suitable for backend development',
          },
          {
            name: 'Ktorm',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'ORM-rammeverk for Kotlin med god støtte for funksjonell programmering mot database. ',
            reason_en:
              'ORM framework for Kotlin with good support for functional programming against database.',
          },
          {
            name: 'Ktor',
            status: 'TRIAL',
            priority: false,
            reason_no: 'JetBrains eget web-rammeverk. I ferd med å bli en standard for Kotlin.',
            reason_en: "JetBrain's own web framework. Becoming a standard for Kotlin.",
          },
          {
            name: 'Play2 Framework',
            status: 'HOLD',
            priority: false,
            reason_no: 'Popularitet daler, få nye prosjekter tar dette i bruk.  ',
            reason_en: 'Popularity is falling, few new projects are adopting this.',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'Reactive architecture',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Populært arkitekturvalg som underbygger et godt ytende system bestående av flere små tjenester.',
            reason_en:
              'Popular architecture choice that supports a well-performing system consisting of several small services.',
          },
          {
            name: 'DevOps',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Velprøvd metodikk for å sikre kontinuerlige leveranser med høy kvalitet og stabilitet',
            reason_en:
              'Proven methodology to ensure continuous deliveries with high quality and stability',
          },
          {
            name: 'Eventdriven',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Populært arkitekturvalg som underbygger et godt ytende system. En byggekloss på veien mot å bli datadrevet. Hjelper på oppdeling av systemer og å unngå tette koblinger.',
            reason_en:
              'Popular architecture choice that supports a high performing system. A building block on the road to becoming data-driven. ',
          },
          {
            name: 'IaC',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Infrastruktur som kode. Bidrar til selvdokumenterende, stabil, kostnadsbesparende og effektiv infrastruktur.',
            reason_en:
              'Infrastructure as code. Contributes to self-documenting, stable, cost-saving and efficient infrastructure.',
          },
          {
            name: 'Object-oriented programming',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Veletablert bransjestandard. Fremdeles ofte den foretrukne metoden for å modellere et domene. ',
            reason_en:
              'Well established and an industry standard. Still often the preferred method for modeling a domain.',
          },
          {
            name: 'SCRUM',
            status: 'KEEP',
            priority: false,
            reason_no: 'God metodikk for å oppnå struktur og forutsigbarhet i team.',
            reason_en: 'Good methodology for achieving structure and predictability in teams.',
          },
          {
            name: 'Functional programming',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Veletablert bransjestandard. Har vokst frem som den foretrukne måten å lage lettlest kode som ikke er sårbare for trivielle feil.',
            reason_en:
              'Well established and an industry standard. Has emerged as the preferred way to create easy-to-read code that is not vulnerable to trivial errors.',
          },
          {
            name: 'Kanban',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Godt alternativ til scrum for struktur i team med mindre definerte leveranser.',
            reason_en:
              'Good alternative to scrum for structure in teams with less defined deliverables.',
          },
          {
            name: 'Microservices',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert bransjestandard. Sikrer skalerbarhet',
            reason_en: 'Well established and an industry standard. Ensures scalability.',
          },
          {
            name: 'Service Mesh',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Bidrar til økt stabilitet og tjenesteorientert kommunikasjon i store systemer',
            reason_en:
              'Contributes to increased stability and service-oriented communication in large systems',
          },
          {
            name: 'OKR',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'God strukturert metodikk for målstyring og resultatoppfølging. Kan bidra til økt eierskap av produktet.',
            reason_en:
              'Structured methodology for goal management and result follow-up. Can contribute to increased ownership of the product.',
          },
          {
            name: 'Serverless',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'God løsning for små og lite ressurskrevende applikasjoner som gir stor fleksibilitet med tanke på både kostnad og skalering.',
            reason_en:
              'Good solution for small and low-resource applications that provide great flexibility in terms of both cost and scaling.',
          },
          {
            name: 'DevSecOps',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Stadig større behov for sikkerhet i løsninger gjør det nødvendig å ha dette som en integrert del av utviklingsløpet.',
            reason_en:
              'The increasing need for security in solutions makes it necessary to have this as an integrated part of the development process.',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'SNS',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'God, enkel og strukturert serverless-tjeneste for notifikasjoner. Lett å ta ibruk.',
            reason_en:
              'Good, simple and structured serverless service for notifications. Easy to use.',
          },
          {
            name: 'SQS',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'God, enkel og strukturert serverless-tjeneste for køfunksjonalitet. Lett å ta ibruk.',
            reason_en:
              'Good, simple and structured serverless service for queue functionality. Easy to use.',
          },
          {
            name: 'Owasp security checking',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Lett tilgjengelig og vedlikehold verktøy for sikkerhetstesting. Viktig del av DevSecOps',
            reason_en:
              'Easily accessible and maintainable tools for security testing. Important part of DevSecOps',
          },
          {
            name: 'Terraform',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Velprøvd og populært verktøy som dekker de fleste skyleverandører for å strukturere og versjonere infrastruktur som kode.',
            reason_en:
              'Proven and popular tool that covers most cloud providers for structuring and versioning infrastructure as code.',
          },
          {
            name: 'Redis',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Veletablert bransjestandard for cache for distribuerte systemer.',
            reason_en: 'Well-established industry standard for caching for distributed systems.',
          },
          {
            name: 'Kafka',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Velprøvd og raskt verktøy for hendelseslogging.  ',
            reason_en: 'Proven and fast event logging tool.',
          },
          {
            name: 'GraalVM',
            status: 'TEST',
            priority: false,
            reason_no:
              'Spennende alternativ til JVM med lav starttid, optimalisert for lav ressursbruk.',
            reason_en:
              'Exciting alternative to JVM with low start time, optimized for low resource use.',
          },
          {
            name: 'AWS CDK',
            status: 'TEST',
            priority: false,
            reason_no:
              'Interessant verktøy for å skrive IaC med standard programmeringsspråk mot AWS.',
            reason_en:
              'Interesting tool for writing IaC with a standard programming language for provisioning AWS.',
          },
          {
            name: 'InfluxDB',
            status: 'TEST',
            priority: false,
            reason_no: 'Database spesifikt bygget for tidsserier. ',
            reason_en: 'Database specifically built for time series.',
          },
          {
            name: 'EventStoreDB',
            status: 'TEST',
            priority: false,
            reason_no: 'Spennende database designet for å passe inn i en eventdreven arkitektur.',
            reason_en: 'Exciting database designed to fit into an event-driven architecture.',
          },
          {
            name: 'DynamoDB',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert key-value store på AWS. ',
            reason_en: 'Well-established key-value store on AWS.',
          },
          {
            name: 'MSSQL Server',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Veletablert DBMS som er lett å konfigurere. Spesielt egnet sammen med annen Microsoft-teknologi. Et godt valg dersom det ønskes et lisensiert alternativ til PostgreSql.',
            reason_en:
              'Well-established DBMS that is easy to configure. Especially suitable together with other Microsoft technology. A good choice if a licensed alternative to PostgreSql is desired.',
          },
          {
            name: 'Flyway/Liquibase',
            status: 'KEEP',
            priority: false,
            reason_no: 'Velkjent og velprøvde verktøy for versjonering av relasjonelle databaser.',
            reason_en: 'Well-known and proven tools for versioning relational databases.',
          },
          {
            name: 'ELK-stack',
            status: 'KEEP',
            priority: false,
            reason_no: 'Velkjent og velprøvd verktøy for logging og loggovervåkning.',
            reason_en: 'Well-known and proven tool for logging and log monitoring.',
          },
          {
            name: 'S3/simple storage',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert objekt-lagring på AWS',
            reason_en: 'Well-established object storage on AWS',
          },
          {
            name: 'PostgreSQL',
            status: 'KEEP',
            priority: false,
            reason_no:
              'Veletablert DBMS som er gratis. Fullgodt alternativ til de store, lisensierte løsningene. Støttes av de fleste ORM.',
            reason_en:
              'Well-established DBMS that is free. Very good alternative to the large, licensed solutions. Supported by most ORMs.',
          },
          {
            name: 'Kubernetes',
            status: 'KEEP',
            priority: false,
            reason_no: 'Veletablert bransjestand for container-orkestrering.',
            reason_en: 'Well-established industry standard for container orchestration.',
          },
          {
            name: 'BigQuery',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Managed, serverless og kraftig datavarehusløsning med gode muligheter for skalering og høy ytelse på store datamengder.',
            reason_en:
              'Managed, serverless and powerful data warehouse solution with good possibilities for scaling and high performance on large amounts of data.',
          },
          {
            name: 'MongoDB',
            status: 'TRIAL',
            priority: false,
            reason_no:
              'Velkjent og etablert dokumentdatabase. Et godt alternativ dersom en dokumentdatabase er nødvendig. Vurder om dokumentdatabase er riktig valg.',
            reason_en:
              'Well-known and established document database. A good alternative if a document database is needed. Consider whether a document database is the right choice for you.',
          },
          {
            name: 'Snyk',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Interessant verktøy for sikkerhetsanalyse. Viktig del av DevSecOps',
            reason_en: 'Interesting tool for security analysis. Important part of DevSecOps',
          },
          {
            name: 'Azure Pipelines',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Interessant CI/CD-verktøy for Azure',
            reason_en: 'Interesting CI/CD tool for Azure',
          },
          {
            name: 'Gitlab CI/CD',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Interessant CI/CD-verktøy',
            reason_en: 'Interesting CI/CD tool',
          },
          {
            name: 'Github Actions',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Interessant CI/CD-verktøy',
            reason_en: 'Interesting CI/CD tool',
          },
          {
            name: 'Kong',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Spennende og open source api management verktøy.',
            reason_en: 'Exciting and open source api management tool.',
          },
          {
            name: 'MySql',
            status: 'HOLD',
            priority: false,
            reason_no: 'Komplisert lisensieringsmodell. Bedre alternativer er tilgjengelig.',
            reason_en: 'Complex licensing model. Better options are available.',
          },
          {
            name: 'OracleDB',
            status: 'HOLD',
            priority: false,
            reason_no: 'Veletablert DBMS. Høy kostnad og fullgode alternativer er tilgjengelig.',
            reason_en: 'Well established DBMS. High cost and other as good options are available.',
          },
          {
            name: 'Helm 2',
            status: 'HOLD',
            priority: false,
            reason_no: 'Helm 3 er tilgjengelig, og trenger ikke tiller-server',
            reason_en: 'Helm 3 is available, and does not need a tiller server',
          },
        ],
      },
    ],
  },
  iot: {
    name: 'Iot',
    link: 'iot',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'C/C++',
            status: 'KEEP',
            priority: true,
            reason_no: 'Bransjestandard for embedded utvikling.',
            reason_en: 'De facto standard for embedded development',
          },
          {
            name: 'Embedded Rust',
            status: 'TEST',
            priority: false,
            reason_no: 'Spennende språk med interessante egenskaper, ikke nådd critical mass enda.',
            reason_en:
              'Interesting language, but has not reached critical mass yet in terms of market adoption.',
          },
          {
            name: 'MicroPython',
            status: 'TEST',
            priority: false,
            reason_no: 'Python for  små enheter, lett i bruk og viser interessant potensiale.',
            reason_en:
              'Python for embedded systems, shows potential given that it is quick to prototype with and stable enough for production use.',
          },
        ],
      },
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'AWS IoT',
            status: 'ADOPT',
            priority: true,
            reason_no: '#1 IoT markedsleder.',
            reason_en: '#1 IoT market leader.',
          },
          {
            name: 'Embedded Linux',
            status: 'ADOPT',
            priority: true,
            reason_no:
              'Raspberry Pi + clones usage enablement. Low cost and good performance for many applications.',
            reason_en: 'Raspberry Pi + clones',
          },
          {
            name: 'TensorFlow Lite for microcontrollers',
            status: 'TEST',
            priority: false,
            reason_no:
              'Integrert ML bruk er stigende pga mer effektiv opplæring og deling av denne.',
            reason_en:
              'Embedded ML is on the rise as uC with ML support is becoming more main stream.',
          },
          {
            name: 'GCP IoT Core',
            status: 'ADOPT',
            priority: false,
            reason_no: '#2 IoT market',
            reason_en: '#2 IoT market',
          },
          {
            name: 'Azure IoT Hub',
            status: 'TRIAL',
            priority: false,
            reason_no: '#3 IoT market',
            reason_en: '#3 IoT market',
          },
          {
            name: 'ROS (Robot Operating System)',
            status: 'TEST',
            priority: false,
            reason_no: 'Monitor',
            reason_en: 'Monitor',
          },
          {
            name: 'ESP-IDF',
            status: 'TRIAL',
            priority: false,
            reason_no: 'ESP32 bare metal development ved behov',
            reason_en: 'ESP32 bare metal development, as needed',
          },
          {
            name: 'Zephyr (RTOS)',
            status: 'TEST',
            priority: false,
            reason_no: 'Nordic Semiconductor foretrukne rammeverk',
            reason_en: 'Nordic Semiconductor backed framework for nRF52 and nRF91',
          },
          {
            name: 'Edge IoT',
            status: 'TEST',
            priority: false,
            reason_no: 'Container basert offloading av funksjoner til IoT enheter',
            reason_en: 'Container based offloading of functions to IoT devices',
          },
          {
            name: 'Balena',
            status: 'TEST',
            priority: false,
            reason_no: 'Løsning for Linux based IoT device management',
            reason_en: 'Framework for IoT Linux development',
          },
          {
            name: 'Mongoose mdash',
            status: 'TEST',
            priority: false,
            reason_no: 'Solution for uC IoT device management',
            reason_en: 'Solution for uC IoT device management',
          },
          {
            name: 'Mongoose OS',
            status: 'TEST',
            priority: false,
            reason_no: 'Rammeverk for IoT uC enheter',
            reason_en: 'Framework for IoT uC development',
          },
          {
            name: 'FreeRTOS',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Amazon backed RTOS used on ESP32/Nordic uC',
            reason_en: 'Amazon backed RTOS used on ESP32/Nordic uC',
          },
          {
            name: 'Pycom',
            status: 'TEST',
            priority: false,
            reason_no: 'Interessant IoT løsning basert på microPython',
            reason_en: 'Interesting off-the-shelf IoT offering which includes everything you need.',
          },
          {
            name: 'Particle',
            status: 'TRIAL',
            priority: true,
            reason_no: 'Interessant komplett IoT løsning basert på Arduino rammeverk',
            reason_en: 'Interesting off-the-shelf IoT offering which includes everything you need.',
          },
        ],
      },
      {
        name: 'Communications',
        id: 'communications',
        items: [
          {
            name: 'MQTT',
            status: 'KEEP',
            priority: true,
            reason_no: '#1 IoT standard',
            reason_en: '#1 IoT standard',
          },
          {
            name: 'Protobuf',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Standardization',
            reason_en: 'Standardization',
          },
          {
            name: 'I2C/SPI/CAN',
            status: 'KEEP',
            priority: false,
            reason_no: 'uC standards',
            reason_en: 'uC standards',
          },
          {
            name: 'Zigbee',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Home automation standard',
            reason_en: 'Home automation standard',
          },
          {
            name: 'Z-Wave',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Home automation standard',
            reason_en: 'Home automation standard',
          },
          {
            name: '4G/5G(NB-IoT/Cat M1)',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Cellular standard',
            reason_en: 'Cellular standard',
          },
          {
            name: 'BLE',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Smart device standard',
            reason_en: 'Smart device standard',
          },
          {
            name: 'COAP',
            status: 'TRIAL',
            priority: false,
            reason_no: '#2 IoT standard',
            reason_en: '#2 IoT standard',
          },
          {
            name: 'LoRaWAN',
            status: 'TRIAL',
            priority: true,
            reason_no: 'Lav terskel nettverksteknologi for sensorer',
            reason_en: 'Low barrier network technology for sensors',
          },
          {
            name: 'Bluetooth Thread',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Monitor market adoption and applications as needed.',
            reason_en: 'Monitor market adoption and applications as needed.',
          },
          {
            name: 'Iridium',
            status: 'TEST',
            priority: false,
            reason_no: 'Customer driven',
            reason_en: 'Customer driven',
          },
          {
            name: '802.11',
            status: 'KEEP',
            priority: false,
            reason_no: 'De facto standard',
            reason_en: 'De facto standard',
          },
          {
            name: 'UWB',
            status: 'TEST',
            priority: true,
            reason_no: 'Precise indoor location',
            reason_en: 'Precise indoor location',
          },
          {
            name: 'Bluetooth DirectionFinding',
            status: 'TEST',
            priority: false,
            reason_no: 'UWB is better?',
            reason_en: 'UWB is better?',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'Fusion 360',
            status: 'KEEP',
            priority: true,
            reason_no: 'Time to market, prototyping',
            reason_en: 'Time to market, prototyping',
          },
          {
            name: 'FreeCAD',
            status: 'KEEP',
            priority: true,
            reason_no: 'Time to market, prototyping',
            reason_en: 'Time to market, prototyping',
          },
          {
            name: 'PlatformIO',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Time to market, prototyping',
            reason_en: 'Time to market, prototyping',
          },
          {
            name: 'Arduino IDE',
            status: 'HOLD',
            priority: false,
            reason_no: 'Too simplistic and there are better alternatives',
            reason_en: 'Too simplistic and there are better alternatives',
          },
          {
            name: 'KiCAD',
            status: 'TEST',
            priority: false,
            reason_no: 'Custom PCB capability',
            reason_en: 'Custom PCB capability',
          },
          {
            name: 'Easy EDA',
            status: 'TEST',
            priority: false,
            reason_no: 'Custom PCB capability',
            reason_en: 'Custom PCB capability',
          },
          {
            name: 'Eagle EDA',
            status: 'TEST',
            priority: false,
            reason_no: 'Custom PCB capability',
            reason_en: 'Custom PCB capability',
          },
        ],
      },
      {
        name: 'Hardware',
        id: 'hardware',
        items: [
          {
            name: 'Arduino',
            status: 'KEEP',
            priority: true,
            reason_no: 'Time to market, prototyping',
            reason_en: 'Time to market, prototyping',
          },
          {
            name: 'ESP32',
            status: 'KEEP',
            priority: true,
            reason_no: 'Swiss army knife, uC/IoT',
            reason_en: 'Swiss army knife, uC/IoT',
          },
          {
            name: 'STM32',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industrial uC solutions',
            reason_en: 'Industrial uC solutions',
          },
          {
            name: 'FPGA',
            status: 'KEEP',
            priority: false,
            reason_no: 'Rå ytelse, for applikasjoner som trenger dette.',
            reason_en: 'Raw performance if you need it.',
          },
          {
            name: 'Teensy',
            status: 'HOLD',
            priority: false,
            reason_no: 'Bra for prototyping, uklar skaleringspotensiale',
            reason_en: 'Excellent for protoyping, hard to scale up',
          },
          {
            name: 'TPU (coral)',
            status: 'TEST',
            priority: false,
            reason_no: 'Monitor market adoption and applications as needed.',
            reason_en: 'Monitor market adoption and applications as needed.',
          },
          {
            name: 'mmWave Radar',
            status: 'TEST',
            priority: false,
            reason_no: 'Monitor market adoption and applications as needed.',
            reason_en: 'Monitor market adoption and applications as needed.',
          },
          {
            name: 'Raspberry PI Pico',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Cost/benefit +',
            reason_en: 'Cost/benefit +',
          },
          {
            name: 'ESP8266',
            status: 'HOLD',
            priority: false,
            reason_no: 'Legacy component, superceded by ESP32.',
            reason_en: 'Legacy component, superceded by ESP32.',
          },
          {
            name: 'nRF9160',
            status: 'TRIAL',
            priority: true,
            reason_no: 'SoC, Cat-M1 + ARM',
            reason_en: 'SoC, Cat-M1 + ARM',
          },
          {
            name: 'Jetson Nano',
            status: 'TEST',
            priority: false,
            reason_no: 'Embedded ML board',
            reason_en: 'Embedded ML board',
          },
        ],
      },
    ],
  },
  cybersec: {
    name: 'Cybersec',
    link: 'cybersec',
    groups: [
      {
        name: 'Languages',
        id: 'languages',
        items: [
          {
            name: 'Shell',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Golang',
            status: 'ADOPT',
            priority: true,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Python',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'REGO',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'RegEx',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Hyperscan',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'HashiCorp Configuration Language',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'JSON',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'YAML',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'SQL',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Bash',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'ZSH',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'PHP',
            status: 'HOLD',
            priority: false,
            reason_no: 'Det finnes bedre server-side rammeverk som følger dagens beste praksis.',
            reason_en:
              'Use alternative server-side frameworks that follows up-to-date best practices.',
          },
          {
            name: 'NOSQL',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
        ],
      },
      {
        name: 'Frameworks',
        id: 'frameworks',
        items: [
          {
            name: 'OPA',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Gatekeeper',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Kubernetes',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'GitHub Advanced Security',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'NIST Cybersecurity Framework',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'ISO 27000',
            status: 'HOLD',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
        ],
      },
      {
        name: 'Methods',
        id: 'methods',
        items: [
          {
            name: 'Code Signing',
            status: 'ADOPT',
            priority: false,
            reason_no:
              '«Best practice» for integritetssjekk av kodeleveranse til infrastrukturplattform',
            reason_en:
              '«Best practice» for integrity check of code delivery to infrastructure plattform.',
          },
          {
            name: 'SBOM',
            status: 'TEST',
            priority: false,
            reason_no:
              'Fullstendig oversikt over avhengigheter. Gir verdi ved hendelser og sikkerhetsfeil i avhengigheter.',
            reason_en:
              'Complete overview of dependencies. Gives value during incidents and security-issues in dependencies.',
          },
          {
            name: 'SWOT',
            status: 'HOLD',
            priority: false,
            reason_no: 'Vektet mot virksomhet- og organisatorisk sikkerhetsbilde.',
            reason_en: 'Angled towards business and organizational security overview.',
          },
          {
            name: 'SecOps',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Integrasjon av sikkerhetsområde med driftområde. Automatisering av sikkerhetsmekanismer og innebygget-sikkerhet.',
            reason_en:
              'Integration between security and with operations. Automation of security mechanisms and built-in security.',
          },
          {
            name: 'Zero trust',
            status: 'ADOPT',
            priority: false,
            reason_no:
              '«Best practice» for tilgangskontroll. Vanligvis uoppnåelig og er heller noe en aspirerer til.',
            reason_en:
              'Best practice for access control. Usually unattainable and rather something one aspires to acheive.',
          },
          {
            name: 'Least privilege',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard. Minimumskrav for tilgangsstyring.',
            reason_en: 'Industry standard. Minimum requirements for access control.',
          },
          {
            name: 'Service Mesh',
            status: 'ADOPT',
            priority: false,
            reason_no:
              'Rammeverk for tjenestekommunikasjon. Brukt rikig styrker tilgangskontroll og sikkerhetsmetodikk. ',
            reason_en:
              'Framework for service communication. Utilized correctly strengthens access control and security methodology.',
          },
          {
            name: 'Ethical Hacking',
            status: 'TEST',
            priority: false,
            reason_no:
              'Forhindrer potensielt misbruk av tjenester ved å teste sikkerheten på en trygg måte.',
            reason_en:
              'Prevents potential misuse of services by testing security in practice in a safe way.',
          },
          {
            name: 'Red Team / Blue Team',
            status: 'TEST',
            priority: false,
            reason_no: 'Øker og bistår til bedre hendelseshåndtering og sikkerhetstesting.',
            reason_en: 'Increases and assists to improve incident management and security testing.',
          },
        ],
      },
      {
        name: 'Procedures',
        id: 'procedures',
        items: [
          {
            name: 'Code Signing',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Code Scanning',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Secret Scanning',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Dependency Graph',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Dependency Scanning',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Version pinning',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Reverse Engineering',
            status: 'HOLD',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'DevSecOps',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'GitSecOps',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'CI/CD',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Contninous upgrade',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Data governance',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'SIEM',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Policy Controller',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Container isolation',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
        ],
      },
      {
        name: 'Tools',
        id: 'tools',
        items: [
          {
            name: 'cosign',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'kube-notary',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Binary Authorization',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'GCP *',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'AWS *',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Azure *',
            status: 'HOLD',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Istio',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Snyk',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'GitHub Advanced Security',
            status: 'TRIAL',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Splunk',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Datadog',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'SolarWinds',
            status: 'HOLD',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Rapid7',
            status: 'TEST',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'PodSecurityPolicy',
            status: 'HOLD',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'Gatekeeper',
            status: 'ADOPT',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'VIM',
            status: 'KEEP',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
          {
            name: 'NANO',
            status: 'HOLD',
            priority: false,
            reason_no: 'Industristandard.',
            reason_en: 'Industry standard.',
          },
        ],
      },
    ],
  },
};

export default categories;
