import React, {useState} from "react";
function CareerCatalyst(props)
{
return (
    <>
        <table class="container">
        <tr>
            <td class="heading">
                <img src="https://drive.google.com/uc?id=1V-Ci3qmHwHLfBncZI4zzjAvQe92jPsaX" alt=""/>
            </td>
        </tr>
        <tr>
            <td class="image">
                <img id="editableImage" src="https://drive.google.com/uc?id=1MtEj1bjXKg8J5_GXTJyn5UQvMqeYyIC2" alt=""/>
            </td>
        </tr>
        <tr>
            <td class="space"></td>
        </tr>
        <tr>
            <td class="details">
                <p id="editableText" contenteditable="true"  rows="5" cols="80">We understand that every career journey is unique. That's why our program is tailored to meet your specific needs and goals. Through personalized assessments and one-on-one career coaching sessions, we'll help you identify your strengths, map out a career path, and develop a customized action plan.</p>
            </td>
        </tr>
        <tr>
            <td class="sub-head">
                <h2 id="editabText" contenteditable="true"  rows="4">Don't miss this opportunity to unlock your true potential. Enroll today!</h2>
            </td>
        </tr>
    </table>
    <div class="button">
        <a href="https://automatiks.in/">
            <button class="btn" >Visit Us</button>
        </a>
    </div>
    <div class="footer">
        <div class="home__social">
            <a href="https://www.linkedin.com/company/automatiks/?originalSubdomain=in" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
            <a href="https://twitter.com/automatiks" class="home__social-icon"><i class='bx bxl-twitter'></i></a>
        </div>
    </div>
    </>
    )
}
export  default CareerCatalyst;