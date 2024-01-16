const dataPT = {
    'projectos': [
        {
            'id': 'PROJPAP',
            'local': 'EDUEPSM',
            'titulo': 'PAP',
            'areas': ['ARBACK', 'ARFRONT', 'ARDB', 'ARDESK'],
            'tecnologias': ['TECVB','TECMYSQL', 'TECPHP'],
            'descricao': 'This was the end course project. In this project I built a company schedulling software, where users could set alarm for events and invite other users to participate in these events. Users that had the application open would receive notification for these events.<br> This system composed by a VB.net application, a MySQL database instance and a php website that had the same features as the application.',
        },
        {
            'id': 'PROJTMS',
            'local': 'EXDHLAL',
            'titulo': 'TMS Interfaces',
            'areas': ['ARDESK', 'ARDB'],
            'tecnologias': ['TECVB', 'TECDBINF'],
            'descricao': 'TMS interfaces was an app that built the bridge between the Transport Management System (TMS) and the Warehouse Management System (WMS).<br> The TMS system would drop XML files in a specific folder, the TMS interface would parse the file and perform a database action according to the XML file. The reverse would also happen, query the WMS system and create an file for the TMS system.',
        },
        {
            'id': 'PROJINFOLG',
            'local': 'EXDHLAL',
            'titulo': 'Infolog Extender',
            'areas': ['ARDESK', 'ARDB'],
            'tecnologias': ['TECVB6','TECDBINF'],
            'descricao': 'Infolog is a Warehouse Management System (WMS). Infolog Extender is an application built in VB6 with that gave users had custom reports and actions to the infolog system. I had the responsability to give support to this application and develop some features.',
        },
        {
            'id': 'PROJREDPRAIRIE',
            'local': 'EXDHLAL',
            'titulo': 'RedPrairie',
            'areas': ['ARDB'],
            'tecnologias': ['TECORAC'],
            'descricao': 'RedPrairie is a Warehouse Managemenet system (WMS). I had the responsability of building reports that existed in the previous WMS for this new one.',
        },
        {
            'id': 'PROJPHC',
            'local': 'EXDHLAL',
            'titulo': 'PHC',
            'areas': ['ARDB'],
            'tecnologias': ['TECMSSQL'],
            'descricao': 'PHC is a Accounting application. I had the responsability of supporting the existing reports and built new ones if internal clients needed so.',
        },
        {
            'id': 'PROJXBOX',
            'local': 'EXADECXBOX',
            'titulo': 'German Callcenter',
            'areas': [],
            'tecnologias': [],
            'descricao': 'I provided first-level XBox support to customers in Germany, Austria, and Switzerland. For example in this role, I tackled account-related issues, assisted with malfunctioning consoles, and guided users through the process of port forwarding on their routers. All of these tasks were conducted through phone calls in German.',
        },
        {
            'id': 'PROJWS',
            'local': 'EDISTOE',
            'titulo': 'Workshop Python / Assembly',
            'areas': [],
            'tecnologias': ['TECPYTH', 'TECASSEMB'],
            'descricao': 'Having entered university with prior professional IT experience, I took the initiative to support my peers by organizing workshops on Python and Assembly language. With an average attendance of 10-15 participants, I received predominantly positive feedback from the participants.',
        },
        {
            'id': 'PROJBANCS',
            'local': 'EDISTOE',
            'titulo': 'Banco de Saude',
            'areas': ['ARBACK', 'ARFRONT', 'ARAG'],
            'tecnologias': ['TECPYTH', 'TECDJANGO', 'TECJIR', 'TECGCLOUD', 'TECGIT'],
            'descricao': 'Banco de Saude was a startup that had the goal to bring medicine to people in need. My responsabilities here was to configure a Jira instance to help track issues, help with setting up the google cloud instance and help with the development of the application itself, that was built on top of the Django framework.',
        },
        {
            'id': 'PROJNEIIST',
            'local': 'EDISTOE',
            'titulo': 'NEIIST',
            'areas': [],
            'tecnologias': [],
            'descricao': 'I actively participated in the student group for my course, contributing to the organization of diverse events such as esports tournaments, course dinners, and workshops for my fellow peers. My highest position was vice-president before leaving.',
        },
        {
            'id': 'PROJTESE',
            'local': 'EDISTOE',
            'titulo': 'Tese Mestrado',
            'areas': ['ARBACK', 'ARFRONT', 'ARCONT', 'ARDB'],
            'tecnologias': ['TECTSCRIPT', 'TECJSCRIPT','TECDOCKER' ,'TECGIT', 'TECBASH', 'TECTHEIA', 'TECLANGI', 'TECHERO'],
            'descricao': 'My masters thesis was the development of an online IDE for the ITLingo project. ITLingo is a research initiative that proposes specification languages for the information technology domain. This online IDE was built with help of the Theia and Langium framework and was then hosted in the Heroku platform',
        },
        {
            'id': 'PROJWCREP',
            'local': 'EXSEMLIS',
            'titulo': 'WC Reporter',
            'areas': ['ARBACK', 'ARFRONT'],
            'tecnologias': ['TECCSHARP', 'TECNETCORE','TECANDR', 'TECXAMAR', 'TECHTCSS', 'TECGIT'],
            'descricao': 'WC Reporter is a system designed for a shopping mall, overseeing the sanitation process of the restrooms. It incorporates intelligent indicator lights, providing customers with real-time information on restroom availability or suggesting alternative facilities, along with directional guidance. A sizable tablet located in proximity to the restrooms enables staff to promptly set the status to either available or undergoing cleaning. Additionally, the security personnel have access to a dedicated screen for monitoring the systems status and the ability to send SMS notifications to prompt cleaning staff when necessary.',
        },
        {
            'id': 'PROJCSIKEA',
            'local': 'EXSEMLIS',
            'titulo': 'IKEA Smart House',
            'areas': ['ARIOT'],
            'tecnologias': ['TECRASP', 'TECPYTH'],
            'descricao': 'For this project, I programmed a series of Raspberry Pis and movement sensors to trigger sound playback upon detecting the entry of IKEA customers into the "Smart House. This implementation was successfully replicated across multiple IKEA stores in Portugal.',
        },
        {
            'id': 'PROJCONTPEP',
            'local': 'EXSEMLIS',
            'titulo': 'Smart Camera',
            'areas': ['ARIOT', 'ARFRONT', 'ARBACK'],
            'tecnologias': ['TECARM', 'TECC', 'TECGIT'],
            'descricao': 'Axis has cameras with ARM system. In these, I programmed a backend server that showed the current count of people inside a certain area; this was for COVID.',
        },
        {
            'id': 'PROJFILRAPID',
            'local': 'EXSEMLIS',
            'titulo': 'Fast Line Continente',
            'areas': ['ARIOT', 'ARFRONT', 'ARBACK'],
            'tecnologias': ['TECESP86','TECNETCORE', 'TECC', 'TECGIT'],
            'descricao': 'Continente is a Portuguese supermarket chain. For one store, I created my version of the fast line. This involved ESP8266 modules, each equipped with a button. Upon pressing the button, the module would send TCP packets to a server, updating a web app displayed on a large TV screen. The web app informed customers which line to join.',
        },
        {
            'id': 'PROJTRLGCS',
            'local': 'EXMORPHOME',
            'titulo': 'Legacy code transformation',
            'areas': ['ARFRONT', 'ARBACK'],
            'tecnologias': ['TECCSHARP','TECNETCORE', 'TECORAC', 'TECGIT', 'TECJIR'],
            'descricao': 'In Morphis, my primary responsibility involved selection an Jira issue, retrieving the legacy code, and retrive imcomplete C# code generated by a legacy code transformer. My task encompassed debugging the C# code, addressing any identified issues, and completing the frontend aspect of the form.',
        },
    ],
    'educacao': [
        {
            'id': 'EDUEPSM',
            'escola': 'Escola Profissional Salvaterra de Magos',
            'curso': 'Information Technology and Management Technician',
            'campi': 'N/A',
            'dataini' : 'Sep-2009',
            'datafin' : 'Jun-2011',
            'img': 'assets/img/gallery-75-10.jpg',
            'local': 'Portugal, Salvaterra de Magos',
            'descricao': 'This is where I first learned to program and attended classes on economics and accounting. It was a professional high school course, and by excelling in my studies, I had the opportunity to secure my first job through this experience.'
        },
        { 
            'id': 'EDISTOE',
            'escola': 'Instituto Superior Tecnico',
            'curso': 'BSc and MSc in Computer Science and Engineering',
            'campi': 'Taguspark',
            'dataini' : 'Sep-2016',
            'datafin' : 'Out-2023',
            'img': 'assets/img/gallery-75-11.jpg',
            'local': 'Portugal, Oeiras',
            'descricao': 'Instituto Superior Técnico is renowned as one of the most prestigious universities in Portugal. I secured a place on the Merit list based on my academic performance. Throughout the course, I gained valuable insights into subjects such as Physics, Number Theory, Calculus, Graph theory, and acquired proficiency in programming languages including Python, Java, and C. Additionally, I delved into various alghorithms, operating systems and more.'
        },
    ],
    'experiencia': [
        {
            'id': 'EXDHLAL',
            'empresa': 'DHL Supply Chain',
            'cargo': 'Técnico de Informática',
            'dataini' : 'Sep-2011',
            'datafin' : 'Jan-2013',
            'img': 'assets/img/gallery-75-12.jpg',
            'local': 'Portugal, Alverca do Ribatejo',
            'descricao': 'This was my first job after highschool, I had the responsability of giving support to internal clients and develop features. I would mostly handle second level support tickets, develop reports for the internal clients and try to automitize various processes.',
        },
        {
            'id': 'EXADECXBOX',
            'empresa': 'Adecco - Arvato',
            'cargo': 'Xbox Support German',
            'dataini' : 'Nov-2014',
            'datafin' : 'May-2015',
            'img': 'assets/img/gallery-75-13.jpg',
            'local': 'Portugal, Lisboa',
            'descricao': 'I provided Xbox support to customers residing in Germany, Austria, and Switzerland. Customers would reach out via phone, and I would engage with them directly. By the end of my contract, I received the highest amount of feedback among the employees (and it was mostly positive also!). I attribute this success to going the extra mile with customers, offering assistance with advanced issues such as port forwarding and other intricacies that my peers may not have been as familiar with.'
        },
        {
            'id': 'EXSEMLIS',
            'empresa': 'Semente',
            'cargo': 'Software Developer',
            'dataini' : 'Sep-2019',
            'datafin' : 'Sep-2020',
            'img': 'assets/img/gallery-75-14.jpg',
            'local': 'Portugal, Lisboa',
            'descricao': 'During university, out of necessity I joined at a small company with fewer than 10 employees. I managed and executed solo projects across various topics, and you can find detailed information about each project on the next page. But in brief, it was here that I learned a lot of IoT and about .NETCore using C#.'
        },
        {
            'id': 'EXMORPHOME',
            'empresa': 'Bold - Morphis',
            'dataini' : 'Out-2020',
            'datafin' : 'Dez-2021',
            'cargo': 'IT Consultant',
            'img': 'assets/img/gallery-75-15.jpg',
            'local': 'Portugal, Remote Work',
            'descricao': 'This marks my second job, undertaken while still in university, and it also represents my initial experience with remote work. At Morphis, the company had an application that transformed legacy code from Oracle PL/SQL into C# code. However, the generated C# code was not always flawless, making it our team\'s responsibility to rectify these incomplete segments and develop the corresponding frontend to align with the original code.'
        },
    ],
    'areas': [
        {
            'id':'ARBACK',
            'nome':'Backend',
        },
        {
            'id':'ARDESK',
            'nome':'Desktop Application',
        },
        {
            'id':'ARFRONT',
            'nome':'Frontend',
        },
        {
            'id':'ARCLOUD',
            'nome':'Cloud',
        },
        {
            'id':'ARCONT',
            'nome':'Container',
        },
        {
            'id':'ARIOT',
            'nome':'Internet of Things',
        },
        {
            'id':'ARDB',
            'nome':'Databases',
        },
        {
            'id':'ARAG',
            'nome':'Agile Tools',
        },
    ],
    'tecnologias': [
        {
            'id': 'TECPYTH',
            'nome': 'Python',
            'tipo': 'Language'

        },
        {
            'id': 'TECTHEIA',
            'nome': 'THEIA',
            'tipo': 'Framework'

        },
        {
            'id': 'TECHERO',
            'nome': 'Heroku',
            'tipo': 'Cloud'

        },
        {
            'id': 'TECLANGI',
            'nome': 'Langium',
            'tipo': 'Framework'

        },
        {
            'id': 'TECASSEMB',
            'nome': 'Assembly Pepe-16',
            'tipo': 'Language'

        },
        {
            'id': 'TECGIT',
            'nome': 'Git',
            'tipo': 'System'

        },
        {
            'id': 'TECMYSQL',
            'nome': 'MySQL',
            'tipo': 'Database'

        },
        {
            'id': 'TECC',
            'nome': 'C',
            'tipo': 'Language'

        },
        {
            'id': 'TECJAVA',
            'nome': 'Java',
            'tipo': 'Language'

        },
        {
            'id': 'TECCSHARP',
            'nome': 'C#',
            'tipo': 'Language'

        },
        {
            'id': 'TECVB',
            'nome': 'VB.NET',
            'tipo': 'Language'

        },
        {
            'id': 'TECJSCRIPT',
            'nome': 'Javascript',
            'tipo': 'Language'

        },
        {
            'id': 'TECTSCRIPT',
            'nome': 'Typescript',
            'tipo': 'Language'

        },
        {
            'id': 'TECNODE',
            'nome': 'Node.JS',
            'tipo': 'System'

        },
        {
            'id': 'TECNETCORE',
            'nome': '.NET Core',
            'tipo': 'System'

        },
        {
            'id': 'TECDJANGO',
            'nome': 'Django',
            'tipo': 'Framework'

        },
        {
            'id': 'TECDOCKER',
            'nome': 'Docker',
            'tipo': 'System'

        },
        {
            'id': 'TECBASH',
            'nome': 'Linux Shell Scripting',
            'tipo': 'Language'

        },
        {
            'id': 'TECAWS',
            'nome': 'AWS',
            'tipo': 'Cloud'

        },
        {
            'id': 'TECGCLOUD',
            'nome': 'Google Cloud',
            'tipo': 'Cloud'

        },
        {
            'id': 'TECRASP',
            'nome': 'Raspberry Pi',
            'tipo': 'System'

        },
        {
            'id': 'TECESP86',
            'nome': 'ESP86',
            'tipo': 'System'

        },
        {
            'id': 'TECANDR',
            'nome': 'Android',
            'tipo': 'System'

        },
        {
            'id': 'TECXAMAR',
            'nome': 'Xamarin',
            'tipo': 'Framework'

        },
        {
            'id': 'TECMSSQL',
            'nome': 'MSSQL',
            'tipo': 'Database'

        },
        {
            'id': 'TECORAC',
            'nome': 'PL/SQL Oracle',
            'tipo': 'Database'
        },
        {
            'id': 'TECPHP',
            'nome': 'PHP',
            'tipo': 'Language'
        },
        {
            'id': 'TECVB6',
            'nome': 'VB6',
            'tipo': 'Language'
        },
        {
            'id': 'TECDBINF',
            'nome': 'Informix Database',
            'tipo': 'Database'
        },
        {
            'id': 'TECJIR',
            'nome': 'Jira',
            'tipo': 'System'
        },
        {
            'id': 'TECHTCSS',
            'nome': 'HTML/CSS',
            'tipo': 'Language'
        },
        {
            'id': 'TECARM',
            'nome': 'ARM Systems',
            'tipo': 'System'
        },
    ],
};

function getDataEducacaoById(id){
   return dataPT['educacao'].filter(ed => ed.id === id)[0];
}

function getDataExperienciaById(id){
    return dataPT['experiencia'].filter(ex => ex.id === id)[0];
}

function getDataAreaById(id){
    return dataPT['areas'].filter(ar => ar.id === id)[0];
}

function getDataTecnologiaById(id){
    return dataPT['tecnologias'].filter(te => te.id === id)[0];
}

function getDataProjectoById(id){
    let proj = Object.assign({}, dataPT['projectos'].filter(pr => pr.id === id)[0]);
    proj['local'] = getDataEducacaoById(proj['local']) ?? getDataExperienciaById(proj['local']);
    proj['areas'] = buildAreaList(proj['areas']);
    proj['tecnologias'] = buildTecnologiaList(proj['tecnologias']);

    return proj;
}

function buildAreaList(listid) {
    let areas = [];
    for(const id of listid) {
        areas.push(getDataAreaById(id));
    }
    return areas;
}

function buildTecnologiaList(listid) {
    let tec = [];
    for(const id of listid) {
        tec.push(getDataTecnologiaById(id));
    }
    return tec;
}


function createLi(obj){
    let li = document.createElement('li');
    let img = document.createElement('img');
    li.appendChild(img);
    li.setAttribute("class", "col-3-12 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn");
    li.setAttribute("id", obj['id']);
    img.setAttribute("src", obj['img']);
    img.setAttribute("class", 'wide rounded margin-bottom-1');
    img.setAttribute("alt", 'Image');
    return li;

}


function createTecLi(obj){
    let li = document.createElement('li');
    li.setAttribute("class", "col-2-12 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn");
    li.setAttribute("id", obj['id']);
    li.innerHTML = '<div class="whiteBgRounded"><h3>' + obj['nome'] + '</h3></div>';
    return li;

}


function createProjLi(obj){
    let li = document.createElement('li');
    li.setAttribute("class", "col-2-12 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn");
    li.setAttribute("id", obj['id']);
    li.innerHTML = '<div class="whiteBgRounded"><h3>' + obj['titulo'] + '</h3></div>';
    return li;

}



function createpopLi(obj){
    let li = document.createElement('li');
    let objText = document.createElement('span');
    let img = document.createElement('img');
    let divider = document.createElement('div');
    divider.setAttribute("class", 'fix-12-12');
    divider.appendChild(img)
    li.appendChild(divider);
    let cloneDivider = divider.cloneNode();
    cloneDivider.appendChild(objText)
    li.appendChild(cloneDivider);
    
    img.setAttribute("src", obj['img']);
    img.setAttribute("class", 'rounded');
    img.setAttribute("alt", 'Image');
    
    objText.innerHTML = obj['descricao'];

    return li;
}


function createdRelatedEduLists(eduObj){
    let listOfProjs = [];
    let listOfTecs = new Set();

    for(const proj of dataPT['projectos']){
        if(eduObj['id'] === proj['local']){
            let procProj = getDataProjectoById(proj['id']);
            listOfProjs.push(proj['titulo']);
            for(tec of procProj['tecnologias']){
                listOfTecs.add(tec['nome']);
            }
        }
    }

    return [listOfProjs, listOfTecs];
}

function createEduText(eduObj){
    let ul = document.createElement('ul');
    let lileft = document.createElement('li');
    ul.setAttribute('class', 'grid equal fixedSpaces margin-top-3');
    lileft.setAttribute('class', 'col-8-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');

    let liright1 = lileft.cloneNode();
    let limid = lileft.cloneNode();
    liright1.setAttribute('class', 'col-2-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    limid.setAttribute('class', 'col-2-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    ul.appendChild(lileft);
    ul.appendChild(liright1);
    ul.appendChild(limid);

    let listOfRelated  =  createdRelatedEduLists(eduObj);

    lileft.innerHTML = '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">School (Course)</h6>' + 
    '<p class="cropBottom" style="text-align: justify;">'+ eduObj['escola'] + ' ('+ eduObj['curso'] +')</p>' +
    '</div>'
    lileft.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Description</h6>' + 
    '<p class="cropBottom" style="text-align: justify;">'+ eduObj['descricao'] +'</p>' +
    '</div>'
    limid.innerHTML = '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Start Date</h6>' + 
    '<p class="">'+ eduObj['dataini'] +'</p>' +
    '</div>' + 
    '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">End Date</h6>' + 
    '<p class="">'+ eduObj['datafin'] +'</p>' +
    '</div>' + 
    '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Location</h6>' + 
    '<p class="">'+ eduObj['local'] +'</p>' +
    '</div>' 
    liright1.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Related Projects</h6>'
    for(const proj of listOfRelated[0]){
        liright1.innerHTML += '<p class="tiny">'+ proj +'</p>'
    }
    liright1.innerHTML += '</div>'
    liright1.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Related Tecnologies</h6>'
    for(const tec of listOfRelated[1]){
        liright1.innerHTML += '<span class="">'+ tec +', </span>'
    }
    liright1.innerHTML += '</div>'

    return ul;


}


function createEdupopLi(eduObj){


    let li = document.createElement('li');
    let img = document.createElement('img');
    let divider = document.createElement('div');
    divider.setAttribute("class", 'fix-12-12');
    divider.appendChild(img)
    li.appendChild(divider);
    let cloneDivider = divider.cloneNode();
    // <ul class="grid grid-74 later equal margin-top-5"></ul>
    cloneDivider.appendChild(createEduText(eduObj));
    li.appendChild(cloneDivider);

    img.setAttribute("src", eduObj['img']);
    img.setAttribute("class", 'rounded');
    img.setAttribute("alt", 'Image');

    return li;
}


function createdRelatedCarLists(carObj){
    let listOfProjs = [];
    let listOfTecs = new Set();

    for(const proj of dataPT['projectos']){
        if(carObj['id'] === proj['local']){
            let procProj = getDataProjectoById(proj['id']);
            listOfProjs.push(proj['titulo']);
            for(tec of procProj['tecnologias']){
                listOfTecs.add(tec['nome']);
            }
        }
    }

    return [listOfProjs, listOfTecs];
}

function createCarText(carObj){
    let ul = document.createElement('ul');
    let lileft = document.createElement('li');
    ul.setAttribute('class', 'grid equal fixedSpaces margin-top-3');
    lileft.setAttribute('class', 'col-8-12 ae-3 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    let liright1 = lileft.cloneNode();
    let limid = lileft.cloneNode();
    liright1.setAttribute('class', 'col-2-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    limid.setAttribute('class', 'col-2-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    ul.appendChild(lileft);
    ul.appendChild(liright1);
    ul.appendChild(limid);

    let listOfRelated  =  createdRelatedCarLists(carObj);

    lileft.innerHTML = '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Company (Position)</h6>' + 
    '<p class="cropBottom" style="text-align: justify;">'+ carObj['empresa'] + ' ('+ carObj['cargo'] +')</p>' +
    '</div>'
    lileft.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Description</h6>' + 
    '<p class="cropBottom" style="text-align: justify;">'+ carObj['descricao'] +'</p>' +
    '</div>'
    limid.innerHTML = '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Start Date</h6>' + 
    '<p class="">'+ carObj['dataini'] +'</p>' +
    '</div>' + 
    '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">End Date</h6>' + 
    '<p class="">'+ carObj['datafin'] +'</p>' +
    '</div>' + 
    '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Location</h6>' + 
    '<p class="">'+ carObj['local'] +'</p>' +
    '</div>' 
    liright1.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Related Projects</h6>'
    for(const proj of listOfRelated[0]){
        liright1.innerHTML += '<p class="">'+ proj +'</p>'
    }
    liright1.innerHTML += '</div>'
    liright1.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Related Tecnologies</h6>'
    for(const tec of listOfRelated[1]){
        liright1.innerHTML += '<span class="">'+ tec +', </span>'
    }
    liright1.innerHTML += '</div>'

    return ul;


}


function createCarpopLi(carObj){


    let li = document.createElement('li');
    let img = document.createElement('img');
    let divider = document.createElement('div');
    divider.setAttribute("class", 'fix-12-12');
    divider.appendChild(img)
    li.appendChild(divider);
    let cloneDivider = divider.cloneNode();
    // <ul class="grid grid-74 later equal margin-top-5"></ul>
    cloneDivider.appendChild(createCarText(carObj));
    li.appendChild(cloneDivider);

    img.setAttribute("src", carObj['img']);
    img.setAttribute("class", 'rounded');
    img.setAttribute("alt", 'Image');

    return li;
}


function createProjText(projObj){
    let ul = document.createElement('ul');
    let lileft = document.createElement('li');
    ul.setAttribute('class', 'grid equal fixedSpaces margin-top-3');
    lileft.setAttribute('class', 'col-8-12 ae-3');
    let liright1 = lileft.cloneNode();
    let limid = lileft.cloneNode();
    liright1.setAttribute('class', 'col-2-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    limid.setAttribute('class', 'col-2-12 ae-3 col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn');
    ul.appendChild(lileft);
    ul.appendChild(limid);
    ul.appendChild(liright1);
    let local = projObj['local']['escola'] ?? projObj['local']['empresa'];

    limid.innerHTML = '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Description</h6>' + 
    '<p class="cropBottom" >'+ projObj['titulo'] + '</p>' +
    '</div>'
    limid.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Related To</h6>' + 
    '<p class="cropBottom" >'+  local +'</p>' +
    '</div>'
    lileft.innerHTML = '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Description</h6>' + 
    '<p class="" style="text-align: justify;">'+ projObj['descricao'] +'</p>' +
    '</div>' 
    liright1.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Areas</h6>'
    for(const area of projObj['areas']){
        liright1.innerHTML += '<p class="">'+ area['nome'] +'</p>'
    }
    liright1.innerHTML += '</div>'
    liright1.innerHTML += '<div class=""><h6 class="uppercase opacity-4 margin-top-3 margin-bottom-2">Tecnologies</h6>'
    for(const tec of projObj['tecnologias']){
        liright1.innerHTML += '<span class="">'+ tec['nome'] +', </span>'
    }
    liright1.innerHTML += '</div>'

    return ul;


}


function createProjpopLi(projObj){


    let li = document.createElement('li');
    // let img = document.createElement('img');
    let divider = document.createElement('div');
    divider.setAttribute("class", 'fix-12-12');
    divider.appendChild(createProjText(projObj))
    li.appendChild(divider);
    let cloneDivider = divider.cloneNode();
    // <ul class="grid grid-74 later equal margin-top-5"></ul>

    // img.setAttribute("src", projObj['img']);
    // img.setAttribute("class", 'rounded');
    // img.setAttribute("alt", 'Image');

    return li;
}

function setupSlide2(){
    let ul =  document.getElementById('slider2UL');
    let ulpop = document.getElementById('slider2popUL');
    let ulCar =  document.getElementById('slider2ULCar');
    let ulpopCar = document.getElementById('slider2popULCar');
    let ulProj =  document.getElementById('slider2ULProj');
    let ulpopProj = document.getElementById('slider2popULProj');
    let ulTecs =  document.getElementById('slider2ULTecs');
    let edu = dataPT['educacao'];
    let career = dataPT['experiencia'];
    let tecs = dataPT['tecnologias'];
    let projs = dataPT['projectos'];
    let tecType = {};
    for(const step of edu){
        ul.appendChild(createLi(step));
        ulpop.appendChild(createEdupopLi(step));
    }

    for(const step of career){
        ulCar.appendChild(createLi(step));
        ulpopCar.appendChild(createCarpopLi(step));
    }

    for(const step of projs){
        let proj = getDataProjectoById(step['id']);
        ulProj.appendChild(createProjLi(proj));
        ulpopProj.appendChild(createProjpopLi(proj));
    }

    
    for(const step of tecs){
        if (tecType.hasOwnProperty(step['tipo'])){
            tecType[step['tipo']].push(step);
        } else {
            tecType[step['tipo']] = [step];
        }
        
    }
    for(const key of  Object.keys(tecType)){
        let li = document.createElement('li');
        let tul = document.createElement('ul');
        let titleD = document.createElement('h3');
        tul.setAttribute('class', '');
        
        titleD.setAttribute('class', 'opacity-6');
        titleD.innerHTML = key;

        li.appendChild(titleD);
        li.appendChild(tul);
        li.setAttribute('class', 'col-2-12 equalElement col-tablet-1-3 col-phablet-1-2 col-phone-1-1 ae-7 fadeIn')
        for(let tec of tecType[key]){
            tul.appendChild(createTecLi(tec));
        }
        ulTecs.appendChild(li);
    }
}

//main
$(document).ready(() => {
    setupSlide2();
});