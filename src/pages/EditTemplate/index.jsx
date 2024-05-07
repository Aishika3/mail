import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OfferTemplate1 from "../Offer/OfferTemplate1";
import ProductTemplate1 from "../ProductDiscovery/Template1";
import CareerCatalyst from "../CareerCatalyst";
import ShoeBrandProduct from "../ShoeBrandProduct";
import Button from "react-bootstrap/Button";
import { editDiscountTemplate } from "../../templates";
import { DiscountHelper } from "../../templates/helper/offer";
import { ProductHelper } from "../../templates/helper/product";
import { CareerHelper } from "../../templates/helper/Career";
// import { editShoeBrand } from "../../templates";
import { ShoeBrand } from "../../templates/helper/ShoeBrand";
import { TechBrand } from "../../templates/helper/TechBrand";
import { DatingBrand } from "../../templates/helper/DatingBrand";
import axios from "axios";

function EditTemplate() {
  const [subject, setSubject] = useState(
    "Quirkfy - A Comprehensive Tech Suite"
  );
  const [testmail, setTestmail] = useState("automatiks23@gmail.com");
  const [url, setUrl] = useState("https://www.automatiks.in");
  const [insta, setInsta] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const { template } = useParams();

  const {
    header,
    setHeader,
    description,
    setDescription,
    changeDescription,
    changeHeader,
  } = DiscountHelper();

  const {
    productheader,
    setProductHeader,
    productdescription,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    productfooter,
    setProductDescription,
    setFeature1,
    setFeature2,
    setFeature3,
    setFeature4,
    setFeature5,
    setProductFooter,
    changeProductDescription,
    changeProductHeader,
    changeFeature1,
    changeFeature2,
    changeFeature3,
    changeFeature4,
    changeFeature5,
    changeProductFooter,
  } = ProductHelper();

  function sendMail() {
    const bodymail = editDiscountTemplate({
      header: header,
      description: description,
      url: url,
      insta: insta,
      twitter: twitter,
      linkedin: linkedin,
      facebook: facebook,
    });

    const apiUrl = "http://localhost:8080/email_bulk";
    const params = new URLSearchParams({
      userid: "O6BXh6LtGkhiBQOtYNisdTfs4SD3",
      email_ids: "anishde85@gmail.com, aheldc@gmail.com",
      username: "automatiks23@gmail.com",
      password: "**********************************",
      subject: subject,
    });

    axios({
      method: "post",
      url: `${apiUrl}?${params}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: bodymail,
    })
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => {
        console.log("Failure");
      });
  }

  return (
    <>
      <div className="w-[99%] mx-auto">
        <div className="w-[80%] mx-auto my-[50px] text-center">
          <h5 className="mx-auto text-center">Subject of the Mail:</h5>
          <input
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="lg:w-[50%] w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
          />
        </div>

        {template === "offer" && (
          <div className="w-[50%] mx-auto">
            <OfferTemplate1
              header={header}
              description={description}
              changeDescription={changeDescription}
              changeHeader={changeHeader}
            />
          </div>
        )}

        {template === "product" && (
          <div className="w-[50%] mx-auto">
            <ProductTemplate1
              header={productheader}
              description={productdescription}
              feature1={feature1}
              feature2={feature2}
              feature3={feature3}
              feature4={feature4}
              feature5={feature5}
              footer={productfooter}
              changeDescription={changeProductDescription}
              changeHeader={changeProductHeader}
              changeFeature1={changeFeature1}
              changeFeature2={changeFeature2}
              changeFeature3={changeFeature3}
              changeFeature4={changeFeature4}
              changeFeature5={changeFeature5}
              changeProductFooter={changeProductFooter}
            />
          </div>
        )}

        {template === "career" && (
          <div className="w-[50%] mx-auto">
            <CareerCatalyst
              header={productheader}
              description={productdescription}
              feature1={feature1}
              feature2={feature2}
              feature3={feature3}
              feature4={feature4}
              feature5={feature5}
              footer={productfooter}
              changeDescription={changeProductDescription}
              changeHeader={changeProductHeader}
              changeFeature1={changeFeature1}
              changeFeature2={changeFeature2}
              changeFeature3={changeFeature3}
              changeFeature4={changeFeature4}
              changeFeature5={changeFeature5}
              changeProductFooter={changeProductFooter}
            />
          </div>
        )}

        {template === "shoe" && (
          <div className="w-[50%] mx-auto">
            <ShoeBrand
              header={productheader}
              description={productdescription}
              feature1={feature1}
              feature2={feature2}
              feature3={feature3}
              feature4={feature4}
              feature5={feature5}
              footer={productfooter}
              changeDescription={changeProductDescription}
              changeHeader={changeProductHeader}
              changeFeature1={changeFeature1}
              changeFeature2={changeFeature2}
              changeFeature3={changeFeature3}
              changeFeature4={changeFeature4}
              changeFeature5={changeFeature5}
              changeProductFooter={changeProductFooter}
            />
          </div>
        )}

        {template === "tech" && (
          <div className="w-[50%] mx-auto">
            <TechBrand
              header={productheader}
              description={productdescription}
              feature1={feature1}
              feature2={feature2}
              feature3={feature3}
              feature4={feature4}
              feature5={feature5}
              footer={productfooter}
              changeDescription={changeProductDescription}
              changeHeader={changeProductHeader}
              changeFeature1={changeFeature1}
              changeFeature2={changeFeature2}
              changeFeature3={changeFeature3}
              changeFeature4={changeFeature4}
              changeFeature5={changeFeature5}
              changeProductFooter={changeProductFooter}
            />
          </div>
        )}

        {template === "dating" && (
          <div className="w-[50%] mx-auto">
            <DatingBrand
              header={productheader}
              description={productdescription}
              feature1={feature1}
              feature2={feature2}
              feature3={feature3}
              feature4={feature4}
              feature5={feature5}
              footer={productfooter}
              changeDescription={changeProductDescription}
              changeHeader={changeProductHeader}
              changeFeature1={changeFeature1}
              changeFeature2={changeFeature2}
              changeFeature3={changeFeature3}
              changeFeature4={changeFeature4}
              changeFeature5={changeFeature5}
              changeProductFooter={changeProductFooter}
            />
          </div>
        )}

        <br />

        <section className="details-section lg:fixed lg:top-[50px] lg:right-0 lg:w-[25%]  w-[80%] mx-auto">
          <div className="w-[80%] mx-auto my-[10px] text-center flex flex-col">
            <label className="mx-auto text-center my-[0px]">
              Provide a link to your website <sup>*</sup>:
            </label>
            <div className="mx-auto w-[80%] text-center">
              <input
                type="email"
                placeholder="Your Website link (Visit Us button in template above)"
                onChange={(e) => setUrl(e.target.value)}
                className="w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
              />
            </div>
          </div>

          <div className="w-[80%] mx-auto my-[10px] text-center flex flex-col">
            <p className="mx-auto text-center my-[0px]">
              Provide a link to your company's Insta profile (optional):
            </p>
            <div className="mx-auto w-[80%] text-center">
              <input
                type="email"
                placeholder="Instagram Profile"
                onChange={(e) => setInsta(e.target.value)}
                className="w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
              />
            </div>
          </div>

          <div className="w-[80%] mx-auto my-[10px] text-center flex flex-col">
            <p className="mx-auto text-center my-[0px]">
              Provide a link to your company's Twitter profile (optional):
            </p>
            <div className="mx-auto w-[80%] text-center">
              <input
                type="email"
                placeholder="Twitter Profile"
                onChange={(e) => setTwitter(e.target.value)}
                className="w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
              />
            </div>
          </div>

          <div className="w-[80%] mx-auto my-[10px] text-center flex flex-col">
            <p className="mx-auto text-center my-[0px]">
              Provide a link to your company's Facebook profile (optional):
            </p>
            <div className="mx-auto w-[80%] text-center">
              <input
                type="email"
                placeholder="Facebook Profile"
                onChange={(e) => setFacebook(e.target.value)}
                className="w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
              />
            </div>
          </div>

          <div className="w-[80%] mx-auto my-[10px] text-center flex flex-col">
            <p className="mx-auto text-center my-[0px]">
              Provide a link to your company's LinkedIn profile (optional):
            </p>
            <div className="mx-auto w-[80%] text-center">
              <input
                type="email"
                placeholder="LinkedIn Profile"
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
              />
            </div>
          </div>
        </section>
        <br />
        <div className="w-[80%] mx-auto my-[10px] text-center flex flex-col">
          <p className="mx-auto text-center my-[0px]">
            Send a test mail, see how it looks before you send:
          </p>
          <div className="mx-auto w-[70%] text-center">
            <input
              type="email"
              placeholder="Type Test Email Id"
              onChange={(e) => setTestmail(e.target.value)}
              className="w-[75%] text-lg p-[10px] h-[50px] rounded-full bg-[#D3D3D3] focus:outline-none shadow-xl"
            />
            <Button className="btn-dark mx-[5px]">Test Mail</Button>
          </div>
        </div>

        <br />
        <div className="w-[80%] mx-auto text-center mt-[20px] mb-[50px]">
          <Button
            className="btn btn-light btn-outline-dark mx-auto text-center px-[20px] bg-[#fff]"
            onClick={sendMail}
          >
            Send Mail
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditTemplate;
