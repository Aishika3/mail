function editDiscountTemplate({
  header,
  description,
  url,
  insta,
  twitter,
  linkedin,
  facebook,
}) {
  const mailbody = ` <!DOCTYPE html>
    <!--our html codes starts--->
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
        <title>Product Template</title>
    </head>                                                
    <body  style="background-color: #FFE5F6; width: 100%">
        <table class="container" style="{
            width: 90%;
                margin: 0 auto;
                padding: 20px;
            }">
            <tr class="heading" style="text-align: center;
            padding: 20px; background-color: #FFE5F6;">
                <td style="width:100%; margin: 0 auto;"><img src="https://drive.google.com/uc?id=1YH__Gzme5aRcwaufnhoOrf8SuJr_L_YZ" alt="" style="width: 60%;"> <td/>    
            </tr>
            <tr class="sub-head" style="background-color:#FFE5F6; padding: 5px; margin: 0 auto; text-align: center;">
                <td style="width:100%; margin: 0 auto;"><h2 id="editableText" contenteditable="true" style="width: 70%; color: #333; font-size: 40px; text-align: center; font-weight: bold; font-family: 'Poppins Medium'; color: #333;
                font-size: 50px;
                text-align: center;
                font-weight: bold;
            margin: 0 auto;
                font-family: 'Poppins Medium';">${header}</h2></td>
            </tr>    
            <tr class="image" style="text-align: center;">
                <td><img id="editableImage" src="https://drive.google.com/uc?id=14Ho4o1nRuZwivB5WWW6gtfRsgjIxvhrs" alt="" 
            style="width: 500px; height: auto; border-radius: 10px;" onclick="editImage()"></td>
            </tr>          
          <tr class="details" style="background-color: #FFE5F6; padding: 5px; border: 1px solid #ccc; border-radius: 5px; width: 60%; margin: 0 auto;">
            <td style="width: 100%;"><p id="editableText" style="width: 80%; margin: 0 auto; font-size: 30px; color: #333; text-align: justify; font-family: 'Poppins Medium';background-color: #FFE5F6;" rows="8" cols="95">${description}</p></td>
          </tr>      
          <tr class="button" style="
            justify-content: center;
            align-items: center;
        text-align: center;
            margin: 10px auto;">
        <td>
            <a id="editableLink" href="${url}" style="text-decoration: none; justify-content: center;">
              <button class="btn" style=" 
                padding: 20px;
                border-radius: 50px;
                color: aliceblue;
                background-color: rgb(41, 39, 43);
                font-size: 30px;
                margin: 20px auto;
                cursor: pointer;
            text-align: center;"
                onclick="editLink()">Visit Us</button>
            </a>
        </td>
          </tr> 
          <tfoot>
          <tr style="width: 200px; margin:0 auto; text-align: center; justify-content: center; align-items: center;">
            <td style="width:10%;">
              ${
                insta !== "" ? (
                  <img
                    src="https://th.bing.com/th/id/OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7"
                    width="50"
                    height="50"
                  />
                ) : (
                  ""
                )
              }
              ${
                twitter !== "" ? (
                  <img
                    src="https://th.bing.com/th/id/OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7"
                    width="50"
                    height="50"
                  />
                ) : (
                  ""
                )
              }
              ${
                linkedin !== "" ? (
                  <img
                    src="https://th.bing.com/th/id/OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7"
                    width="50"
                    height="50"
                  />
                ) : (
                  ""
                )
              }
            </td>
          </tr>  
          </tfoot>   
        </table>
         
    </body>
    </html>
   `;

  return mailbody;
}

function editProductTemplate({
  header,
  description,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  footer,
  url,
  insta,
  twitter,
  linkedin,
  facebook,
}) {
  const mailbody = `<!DOCTYPE html>
        <!--our html codes starts--->
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
            <title>Automatiks Template</title>
        </head>
        <body>
            <table class="template" style="width: 80%; margin: 0 auto; text-align: center;">
                <tr style="width: 100%;">
                    <td class="heading" style="text-align: center; padding: 10px; width: 100%;">
                        <img src="https://drive.google.com/uc?id=1vSM56VWtkPrQXCjcHXD_fMwOSstsSRmt" alt="">
                    </td>
                </tr>
                <tr>
                    <td class="sub-head" style="background-color:#FFFF; padding: 0px; width: 100%;">
                        <p id="editableText" contenteditable="true" style="width: 100%; color: #333; font-size: 40px; text-align: center; font-weight: bold; font-family: 'Poppins Medium'; text-decoration-line: underline; text-decoration-color: #9a5dfd;">${header}</p>
                    </td>
                </tr>
                <tr>
                    <td class="details" style="width: 100%; background-color: #FFFF; padding: 0px; border: 1px solid #FFFF; border-radius: 5px; ">
                        <p id="editableText" contenteditable="true" style="width: 100%; font-size: 16px; color: #333; text-align: center; font-family: 'Poppins Medium';" rows="4">${description}</p>
                    </td>
                </tr>
                <tr>
                    <td class="details" style="background-color: #FFFF; padding: 0px; border: 1px solid #FFFF; border-radius: 5px;">
                        <h2 id="editableText" contenteditable="true">Our services include:</h2>
                    </td>
                </tr>
                <tr>
                    <td class="section1" style="background-color:#DDC8FF ; width: 100%;" >
                        <img id="editableImage" src="https://drive.google.com/uc?id=19P_lmaO3cAkziMopnwdQAbQBF2v_xmGN" alt="" width="200">
                        <p id="editableText" contenteditable="true" rows="10" style="background-color:#DDC8FF ; width: 70%; margin: auto; align-content: center; justify-content: center;">${feature1}</p>
                    </td>
                </tr>
                <tr>
                    <td class="section2">
                        <p id="editableText" contenteditable="true" rows="10" style="width: 70%; margin: auto; align-content: center; justify-content: center;">${feature2}</p>
                        <img id="editableImage" src="https://drive.google.com/uc?id=1sAYkE-ulP9MbVe3t5lVHjStMLUC643LS" alt="" width="200">
                    </td>
                </tr>
                <tr>
                    <td class="section1" style="background-color:#DDC8FF ;">
                        
                                <p id="editableText" contenteditable="true" rows="10" style="background-color:#DDC8FF ; width: 70%; margin: auto; align-content: center; justify-content: center;">${feature3}</p>
                            
                                <img id="editableImage" src="https://drive.google.com/uc?id=1YMT-d1-mWhggEeaiiGE5o7WspyeioPlG" alt="" width="200">
                            
                    </td>
                </tr>
                <tr>
                    <td class="section2">
                        
                                <img id="editableImage" src="https://drive.google.com/uc?id=1vv1kgjwOIHcEfBEVlxFYBDEvAwfTEad4" alt="" width="200">
                            
                                <p id="editableText" contenteditable="true" rows="10" style="width: 70%; margin: auto; align-content: center; justify-content: center;">${feature4}</p>
                            
                    </td>
                </tr>
                <tr>
                    <td class="section1" style="background-color:#DDC8FF ;">
                        
                                <p id="editableText" contenteditable="true" rows="10" style="background-color:#DDC8FF ; width: 70%; margin: auto; align-content: center; justify-content: center;">${feature5}</p>
                            
                                <img id="editableImage" src="https://drive.google.com/uc?id=1UEG5X5l317qss38DTL3fRpj-giD3t14r" alt="" width="200">
                            
                    </td>
                </tr>
                <tr>
                    <td class="details" style="background-color: #FFFF; padding: 5px; border: 1px solid #ccc; border-radius: 5px;">
                        <p id="editableText" contenteditable="true" style="width: 100%; font-size: 16px; color: #333; text-align: justify;font-family: 'Poppins Medium';" rows="4" style="width: 70%; margin: auto; align-content: center; justify-content: center;">${footer}</p>
                    </td>
                </tr>
            </table>
            <div class="button" style="text-align:center">
                <a href=${url} style="text-decoration: none;justify-content: center;">
                    <button class="btn" style="
                        padding:8px;
                        border-radius:50px;
                        color:aliceblue;
                        background-color:rgb(41, 39, 43);
                        font-size:20px;
                        margin:50px;
                        cursor:pointer;">Visit Us</button>
                </a>
            </div>
        </body>
    </html>`;

  return mailbody;
}
function editCareerCatalyst({ career_sub_head, career_details }) {
  const mailbody = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
  <title>Career Catalyst Template</title>
</head>

<body>
    <body style="background-color: #FFFFFF; margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <table class="container" style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <tr>
            <td class="heading" style="background-color: #FFFFFF; text-align: center;">
                <img src="https://drive.google.com/uc?id=1V-Ci3qmHwHLfBncZI4zzjAvQe92jPsaX" alt="" style="max-width: 100%; height: auto; border-radius: 5px;">
            </td>
        </tr>
        <tr>
            <td class="image" style="text-align: center;">
                <img id="editableImage" src="https://drive.google.com/uc?id=1MtEj1bjXKg8J5_GXTJyn5UQvMqeYyIC2" alt="" style="max-width: 100%; height: auto; border-radius: 20px;" onclick="editImage()">
            </td>
        </tr>
        <tr>
            <td class="space" style="padding: 20px;"></td>
        </tr>
        <tr>
            <td class="details" style="background-color: #FFFFFF; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin: 10px;">
                <p id="editableText" contenteditable="true" style="font-size: 16px; color: #333; text-align: justify; font-family: 'Poppins Medium'; border-color: #FFFFFF; margin: 5px; width: 100%;" rows="5" cols="80">${career_details}</p>
            </td>
        </tr>
        <tr>
            <td class="sub-head" style="background-color:#FFFFFF; padding: 5px;">
                <h2 id="editabText" contenteditable="true" style="color: #333; font-size: 30px; text-align: center; font-weight: bold; font-family: 'Poppins Medium'; width: 100%; height: auto;" rows="4">${career_sub_head}</h2>
            </td>
        </tr>
    </table>
    <div class="button" style="text-align: center;">
        <a href="https://automatiks.in/" style="text-decoration: none; justify-content: center;">
            <button class="btn" style="padding: 8px; border-radius: 50px; color: aliceblue; background-color: rgb(41, 39, 43); font-size: 20px; margin: 50px; cursor: pointer;">Visit Us</button>
        </a>
    </div>
    <div class="footer">
        <div class="home__social" style="text-align: center; margin-top: 5px;">
            <a href="https://www.linkedin.com/company/automatiks/?originalSubdomain=in" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx

 bxl-linkedin'></i></a>
            <a href="https://twitter.com/automatiks" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx bxl-twitter'></i></a>
        </div>
    </div>
</body>
</html>
</body>
</html>`;

  return mailbody;
}

function editShoeBrand({ shoe_details, shoe_sub_head }) {
  const mailbody = `<!DOCTYPE html>
   <html lang="en">
   
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
     <title>Shoe Brand Template</title>
   </head>
   
   <body>
       <body style="background-color: #FFFFFF; margin: 0; padding: 0; font-family: Arial, sans-serif;">
       <table class="container" style="max-width: 800px; margin: 0 auto; padding: 20px;">
           <tr>
               <td class="heading" style="background-color: #FFFFFF; text-align: center;">
                   <img src="https://drive.google.com/uc?id=1V-Ci3qmHwHLfBncZI4zzjAvQe92jPsaX" alt="" style="max-width: 100%; height: auto; border-radius: 5px;">
               </td>
           </tr>
           <tr>
               <td class="image" style="text-align: center;">
                   <img id="editableImage" src="https://drive.google.com/uc?id=1MtEj1bjXKg8J5_GXTJyn5UQvMqeYyIC2" alt="" style="max-width: 100%; height: auto; border-radius: 20px;" onclick="editImage()">
               </td>
           </tr>
           <tr>
               <td class="space" style="padding: 20px;"></td>
           </tr>
           <tr>
               <td class="details" style="background-color: #FFFFFF; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin: 10px;">
                   <p id="editableText" contenteditable="true" style="font-size: 16px; color: #333; text-align: justify; font-family: 'Poppins Medium'; border-color: #FFFFFF; margin: 5px; width: 100%;" rows="5" cols="80">${shoe_details}</p>
               </td>
           </tr>
           <tr>
               <td class="sub-head" style="background-color:#FFFFFF; padding: 5px;">
                   <h2 id="editabText" contenteditable="true" style="color: #333; font-size: 30px; text-align: center; font-weight: bold; font-family: 'Poppins Medium'; width: 100%; height: auto;" rows="4">${shoe_sub_head}</h2>
               </td>
           </tr>
       </table>
       <div class="button" style="text-align: center;">
           <a href="https://automatiks.in/" style="text-decoration: none; justify-content: center;">
               <button class="btn" style="padding: 8px; border-radius: 50px; color: aliceblue; background-color: rgb(41, 39, 43); font-size: 20px; margin: 50px; cursor: pointer;">Visit Us</button>
           </a>
       </div>
       <div class="footer">
           <div class="home__social" style="text-align: center; margin-top: 5px;">
               <a href="https://www.linkedin.com/company/automatiks/?originalSubdomain=in" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx
   
    bxl-linkedin'></i></a>
               <a href="https://twitter.com/automatiks" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx bxl-twitter'></i></a>
           </div>
       </div>
   </body>
   </html>
   </body>
   </html>`;

  return mailbody;
}

function editTechBrand({ tech_details, tech_sub_head }) {
  const mailbody = `<!DOCTYPE html>
   <html lang="en">
   
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
     <title>Shoe Brand Template</title>
   </head>
   
   <body>
       <body style="background-color: #FFFFFF; margin: 0; padding: 0; font-family: Arial, sans-serif;">
       <table class="container" style="max-width: 800px; margin: 0 auto; padding: 20px;">
           <tr>
               <td class="heading" style="background-color: #FFFFFF; text-align: center;">
                   <img src="https://drive.google.com/uc?id=1V-Ci3qmHwHLfBncZI4zzjAvQe92jPsaX" alt="" style="max-width: 100%; height: auto; border-radius: 5px;">
               </td>
           </tr>
           <tr>
               <td class="image" style="text-align: center;">
                   <img id="editableImage" src="https://drive.google.com/uc?id=1MtEj1bjXKg8J5_GXTJyn5UQvMqeYyIC2" alt="" style="max-width: 100%; height: auto; border-radius: 20px;" onclick="editImage()">
               </td>
           </tr>
           <tr>
               <td class="space" style="padding: 20px;"></td>
           </tr>
           <tr>
               <td class="details" style="background-color: #FFFFFF; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin: 10px;">
                   <p id="editableText" contenteditable="true" style="font-size: 16px; color: #333; text-align: justify; font-family: 'Poppins Medium'; border-color: #FFFFFF; margin: 5px; width: 100%;" rows="5" cols="80">${tech_details}</p>
               </td>
           </tr>
           <tr>
               <td class="sub-head" style="background-color:#FFFFFF; padding: 5px;">
                   <h2 id="editabText" contenteditable="true" style="color: #333; font-size: 30px; text-align: center; font-weight: bold; font-family: 'Poppins Medium'; width: 100%; height: auto;" rows="4">${tech_sub_head}</h2>
               </td>
           </tr>
       </table>
       <div class="button" style="text-align: center;">
           <a href="https://automatiks.in/" style="text-decoration: none; justify-content: center;">
               <button class="btn" style="padding: 8px; border-radius: 50px; color: aliceblue; background-color: rgb(41, 39, 43); font-size: 20px; margin: 50px; cursor: pointer;">Visit Us</button>
           </a>
       </div>
       <div class="footer">
           <div class="home__social" style="text-align: center; margin-top: 5px;">
               <a href="https://www.linkedin.com/company/automatiks/?originalSubdomain=in" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx
   
    bxl-linkedin'></i></a>
               <a href="https://twitter.com/automatiks" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx bxl-twitter'></i></a>
           </div>
       </div>
   </body>
   </html>
   </body>
   </html>`;

  return mailbody;
}

function editDatingBrand({ dating_details, dating_sub_head }) {
  const mailbody = `<!DOCTYPE html>
   <html lang="en">
   
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
     <title>Shoe Brand Template</title>
   </head>
   
   <body>
       <body style="background-color: #FFFFFF; margin: 0; padding: 0; font-family: Arial, sans-serif;">
       <table class="container" style="max-width: 800px; margin: 0 auto; padding: 20px;">
           <tr>
               <td class="heading" style="background-color: #FFFFFF; text-align: center;">
                   <img src="https://drive.google.com/uc?id=1V-Ci3qmHwHLfBncZI4zzjAvQe92jPsaX" alt="" style="max-width: 100%; height: auto; border-radius: 5px;">
               </td>
           </tr>
           <tr>
               <td class="image" style="text-align: center;">
                   <img id="editableImage" src="https://drive.google.com/uc?id=1MtEj1bjXKg8J5_GXTJyn5UQvMqeYyIC2" alt="" style="max-width: 100%; height: auto; border-radius: 20px;" onclick="editImage()">
               </td>
           </tr>
           <tr>
               <td class="space" style="padding: 20px;"></td>
           </tr>
           <tr>
               <td class="details" style="background-color: #FFFFFF; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin: 10px;">
                   <p id="editableText" contenteditable="true" style="font-size: 16px; color: #333; text-align: justify; font-family: 'Poppins Medium'; border-color: #FFFFFF; margin: 5px; width: 100%;" rows="5" cols="80">${dating_details}</p>
               </td>
           </tr>
           <tr>
               <td class="sub-head" style="background-color:#FFFFFF; padding: 5px;">
                   <h2 id="editabText" contenteditable="true" style="color: #333; font-size: 30px; text-align: center; font-weight: bold; font-family: 'Poppins Medium'; width: 100%; height: auto;" rows="4">${dating_sub_head}</h2>
               </td>
           </tr>
       </table>
       <div class="button" style="text-align: center;">
           <a href="https://automatiks.in/" style="text-decoration: none; justify-content: center;">
               <button class="btn" style="padding: 8px; border-radius: 50px; color: aliceblue; background-color: rgb(41, 39, 43); font-size: 20px; margin: 50px; cursor: pointer;">Visit Us</button>
           </a>
       </div>
       <div class="footer">
           <div class="home__social" style="text-align: center; margin-top: 5px;">
               <a href="https://www.linkedin.com/company/automatiks/?originalSubdomain=in" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx
   
    bxl-linkedin'></i></a>
               <a href="https://twitter.com/automatiks" class="home__social-icon" style="display: inline-block; margin: 0 5px; font-size: 40px; color: #333; transition: color 0.3s;"><i class='bx bxl-twitter'></i></a>
           </div>
       </div>
   </body>
   </html>
   </body>
   </html>`;

  return mailbody;
}
export {
  editDiscountTemplate,
  editCareerCatalyst,
  editProductTemplate,
  editShoeBrand,
  editTechBrand,
  editDatingBrand
};
