const informationAboutModel = [
    {
        id:1,
        series: '1 series',
        images: 'https://www.bmw.ua/content/dam/bmw/common/all-models/1-series/5-door/2019/inspire/bmw-1-series-inspire-taphold-driving-dynamics-desktop-01.jpg/jcr:content/renditions/cq5dam.resized.img.1185.large.time1627482147001.jpg',
        information: 'Чисте прагнення: новий BMW 1 серії прибув, щоб привернути до себе захоплені погляди. Його видатний дизайн і прогресивна мова дизайну виділяють його з натовпу. Те ж саме стосується і його салону із сучасною атмосферою, яка надихає своєю першокласною якістю та відкритістю. Ефективні двигуни, передній привід, вперше представлений в новій BMW 1 серії, і новітні технології шасі гарантують враження від керування, повні динаміки і маневреності, а інноваційні технології та системи',
    },
    {
        id:2,
        series: '2 series',
        images: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/2-series/gran-coupe/2019/bmw-2-series-gran-coupe-highlights/jcr:content/par/mosaicgallery_448d/items/mosaicgalleryitem_de/image.transform/mosaic963/image.1576755524683.jpg',
        information: 'Неймовірний досвід: новий BMW 2 серії Gran Coupé представляє нову форму авторитету зі сміливим характером в компактному класі. Це перш за все безкомпромісна, орієнтована на продуктивність естетика, яка безпомилково розкриває свої амбіції. Чи не елегантний, а екстравагантний. Чи не звичайний, а надзвичайний. Відповідно до передових технологій та ідеально налаштованими динамічними',
    },
    {   
        id:3,
        series: '3 series',
        images: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire/jcr:content/par/mosaicgallery/items/mosaicgalleryitem_95/image.transform/mosaic963/image.1554286588350.jpg',
        information: 'Ледве виїхавши на дорогу, новий BMW 3 серії залишає позаду забобони та випереджає найсміливіші очікування. В черговий раз легендарна модель постає в новій іпостасі. Новий дизайн символізує початок нової ери. Досконалий спортивний седан керується ще більш потужними й економічними двигунами.',
    },
    {
        id:4,
        series: '4 series',
        images: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/4-series/coupe/2020/bmw-4-series-coupe-highlights/jcr:content/par/mosaicgallery/items/mosaicgalleryitem_2045026459/image.transform/mosaic485/image.1597922414251.jpg',
        information: 'Безкомпромісний нонконформіст: абсолютно новий BMW 4 серії Coupé рішуче та елегантно виходить за рамки всіх сучасних правил. Незалежний дизайн і класичний силует купе підкреслюють його прогресивний характер. Спортивна легкість плавно переходить на дорогу, де вражаюча маневреність і привабливі характеристики сприяють підвищенню рівня адреналіну.',
    },
    {
        id:5,
        series: '5 series',
        images: 'https://www.bmw.ua/content/bmw/marketB4R1/bmw_ua/uk_UA/all-models/5-series/sedan/2020/bmw-5-series-sedan-highlights/jcr:content/par/mosaicgallery_d34b/items/mosaicgalleryitem_97/image.transform/mosaic963/image.1597323989179.jpg',
        information: 'BMW 5 серії Седан — втілення спортивного бізнес-седана. З першого погляду він демонструє стильний атлетизм, який особливо виражається у динамічному силуеті та лаконічному дизайні. Прості поверхні та чіткі контури надають елегантному зовнішньому вигляду сучасну та технологічну атмосферу. Елегантний і функціональний інтерєр доповнює інноваційні амбіції автомобіля технологіями майбутнього та спортивними особливостями. зкомпромісний нонконформіст: абсолютно новий BMW 4 серії Coupé рішуче та елегантно виходить за рамки всіх сучасних правил. Незалежний дизайн і класичний силует купе підкреслюють його прогресивний характер. Спортивна легкість плавно переходить на дорогу, де вражаюча маневреність і привабливі характеристики сприяють підвищенню рівня адреналіну.',
    },
]

const button = document.querySelector('.about-product__navigation')
const mainInfoBlock = document.querySelector('.about-product__info-block');
const mainTitle = document.createElement('h1');
const mainImage = document.createElement('img');
const mainText = document.createElement('p');

function generateInformationAboutModel({target}){
    mainInfoBlock.innerHTML="";
    if(target.dataset.id) {
        const buttonId = Number(target.dataset.id);
        const { id, series, information, images } = informationAboutModel.find(({id}) => id === buttonId);
        mainInfoBlock.prepend(mainTitle);
        mainTitle.classList.add('about-product__main-title');
        mainTitle.innerHTML = `About BMW ${series}`;

        mainInfoBlock.append(mainText);
        mainText.classList.add('about-product__description');
        mainText.innerHTML = information;

        mainInfoBlock.append(mainImage);
        mainImage.classList.add('about-product__main-image');
        mainImage.alt = `bmw${id}`
        mainImage.src = images;
    }
}

button.addEventListener('click', generateInformationAboutModel)
