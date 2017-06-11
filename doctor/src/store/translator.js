  function getTranslation(text, targetLang = 'en', sourceLang = 'auto') {
    return jqery.get( "https://translate.googleapis.com/translate_a/single", 
    { 
    client: "gtx", 
    sl: sourceLang, 
    tl: targetLang, 
    dt: "t", 
    q: text} 
    );
}

export default getTranslation;

//  .done(function( data ) {
//         return data[0][0][0]
//     console.log(data[0][0][1]);
//     console.log();
//     })