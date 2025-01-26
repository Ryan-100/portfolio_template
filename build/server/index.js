import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-C6EjcOoq.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "w-full h-full min-h-screen max-w-screen-2xl mx-auto bg-web-bg bg-cover bg-center bg-no-repeat",
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Button = ({ children, onClick }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-fit h-fit rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "gradient-border-wrapper", children: /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "gradient-border",
      children
    }
  ) }) });
};
const LeafIcon = "data:image/svg+xml,%3csvg%20width='66'%20height='65'%20viewBox='0%200%2066%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_804_2269)'%3e%3crect%20x='1.5'%20y='1'%20width='63'%20height='63'%20stroke='%23E1F7FF'/%3e%3cpath%20d='M47.9316%2021.5704C47.7844%2020.6458%2046.9748%2019.9558%2046.041%2019.9558C46.0364%2019.9558%2046.0272%2019.9558%2046.0226%2019.9558C40.2174%2020.0156%2034.6192%2022.0856%2030.171%2025.7932C30.033%2024.1648%2029.5684%2022.5778%2028.8002%2021.1242C27.7514%2019.1416%2026.1736%2017.4856%2024.2462%2016.3356C23.4688%2015.871%2022.4982%2015.9998%2021.891%2016.6484C19.0022%2019.7258%2017.4474%2023.7462%2017.5164%2027.969C17.5808%2032.0354%2019.1448%2035.8626%2021.9324%2038.802C21.6702%2039.8048%2021.4724%2040.826%2021.339%2041.8656C21.2838%2042.2934%2021.5828%2042.6844%2022.0152%2042.7442C22.0474%2042.7488%2022.0842%2042.7488%2022.1164%2042.7488C22.5028%2042.7488%2022.8386%2042.4636%2022.8892%2042.068C23.0318%2040.987%2023.2434%2039.929%2023.5286%2038.9032C23.5608%2038.8342%2023.5792%2038.7652%2023.5884%2038.6916C26.4082%2028.8062%2035.5254%2021.6302%2046.0502%2021.5198C46.0502%2021.5198%2046.0502%2021.5198%2046.0548%2021.5198C46.2204%2021.5198%2046.3768%2021.6532%2046.4044%2021.8142C46.984%2025.4712%2047.0024%2029.1788%2046.4596%2032.8404C46.4504%2032.868%2046.4412%2032.8956%2046.4366%2032.9232C45.3556%2037.5646%2042.338%2041.5298%2038.1474%2043.7976C34.4536%2045.8032%2030.1526%2046.3276%2026.1184%2045.311C27.48%2044.414%2028.7864%2043.4296%2030.033%2042.3578C33.322%2039.5288%2036.0866%2036.1846%2038.2486%2032.4264C38.4648%2032.0538%2038.336%2031.5754%2037.9588%2031.3592C37.5862%2031.143%2037.1078%2031.2718%2036.8916%2031.649C33.736%2037.1%2029.2234%2041.654%2023.8598%2044.8648C23.8368%2044.874%2023.8184%2044.8878%2023.7954%2044.9016C22.075%2045.9274%2020.2718%2046.8106%2018.395%2047.5466C17.9948%2047.703%2017.7924%2048.1584%2017.9534%2048.5586C18.073%2048.8668%2018.3674%2049.0554%2018.6802%2049.0554C18.7768%2049.0554%2018.8734%2049.037%2018.9654%2049.0002C20.8238%2048.2734%2022.6086%2047.4086%2024.3198%2046.4104C26.2242%2047.0544%2028.2022%2047.3764%2030.1756%2047.3764C33.184%2047.3764%2036.1786%2046.6358%2038.8742%2045.1684C43.4098%2042.712%2046.6942%2038.434%2047.904%2033.4246C47.9316%2033.3602%2047.9546%2033.2912%2047.9638%2033.2176C48.5572%2029.3536%2048.5434%2025.4344%2047.9316%2021.5704ZM25.3686%2031.12C25.3594%2030.2828%2025.3226%2029.5054%2025.2582%2028.7602C25.1156%2027.1686%2024.8442%2025.4942%2024.4302%2023.6312C24.3382%2023.208%2023.9196%2022.9458%2023.4964%2023.0378C23.0732%2023.1298%2022.811%2023.5484%2022.903%2023.9716C23.3032%2025.7656%2023.5654%2027.3756%2023.6988%2028.8982C23.8276%2030.3564%2023.8414%2031.9618%2023.7356%2033.9352C23.2388%2034.938%2022.8064%2035.973%2022.4476%2037.0402C17.7372%2031.419%2017.8982%2023.1712%2023.0226%2017.7156C23.1238%2017.6052%2023.2986%2017.5914%2023.4412%2017.6742C26.7946%2019.6706%2028.768%2023.2862%2028.6438%2027.1686C27.411%2028.3784%2026.3162%2029.7032%2025.3686%2031.12Z'%20fill='url(%23paint0_linear_804_2269)'/%3e%3c/g%3e%3crect%20x='1'%20y='0.5'%20width='64'%20height='64'%20rx='24'%20stroke='url(%23paint1_linear_804_2269)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_804_2269'%20x1='17.8235'%20y1='23.1994'%20x2='39.0151'%20y2='23.422'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF00FF'/%3e%3cstop%20offset='1'%20stop-color='%2300BBFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_804_2269'%20x1='61.7057'%20y1='64.5'%20x2='3.46322'%20y2='1.26542'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300BBFF'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_804_2269'%3e%3crect%20x='1'%20y='0.5'%20width='64'%20height='64'%20rx='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const ChatIcon = "data:image/svg+xml,%3csvg%20width='66'%20height='65'%20viewBox='0%200%2066%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_804_2254)'%3e%3crect%20x='1.5'%20y='1'%20width='63'%20height='63'%20stroke='%23E1F7FF'/%3e%3cpath%20d='M23.1573%2031.2146C23.0537%2030.547%2022.9999%2029.863%2022.9999%2029.1666C22.9999%2021.8028%2029.0087%2015.8333%2036.421%2015.8333C43.8332%2015.8333%2049.842%2021.8028%2049.842%2029.1666C49.842%2030.83%2049.5354%2032.4223%2048.9752%2033.8908C48.8589%2034.1957%2048.8007%2034.3482%2048.7743%2034.4673C48.7481%2034.5852%2048.738%2034.6682%2048.7352%2034.789C48.7323%2034.9109%2048.7489%2035.0452%2048.7819%2035.3138L49.4529%2040.7641C49.5255%2041.3541%2049.5618%2041.6491%2049.4637%2041.8636C49.3777%2042.0515%2049.225%2042.2008%2049.0351%2042.2824C48.8185%2042.3756%2048.5244%2042.3325%2047.9362%2042.2463L42.6274%2041.4681C42.3502%2041.4275%2042.2116%2041.4072%2042.0854%2041.4079C41.9605%2041.4086%2041.8741%2041.4178%2041.7519%2041.4435C41.6284%2041.4695%2041.4706%2041.5286%2041.1549%2041.6468C39.6828%2042.1982%2038.0873%2042.4999%2036.421%2042.4999C35.724%2042.4999%2035.0394%2042.4471%2034.3711%2042.3454M25.7193%2049.1666C30.6608%2049.1666%2034.6666%2045.0625%2034.6666%2039.9999C34.6666%2034.9373%2030.6608%2030.8333%2025.7193%2030.8333C20.7778%2030.8333%2016.7719%2034.9373%2016.7719%2039.9999C16.7719%2041.0176%2016.9338%2041.9965%2017.2326%2042.9111C17.3589%2043.2978%2017.422%2043.4911%2017.4427%2043.6232C17.4644%2043.761%2017.4682%2043.8385%2017.4601%2043.9778C17.4524%2044.1112%2017.419%2044.2621%2017.3522%2044.5638L16.3333%2049.1666L21.3246%2048.4849C21.5971%2048.4477%2021.7333%2048.4291%2021.8523%2048.4299C21.9775%2048.4308%2022.044%2048.4375%2022.1668%2048.462C22.2835%2048.4853%2022.4569%2048.5465%2022.8038%2048.6689C23.7176%2048.9915%2024.6985%2049.1666%2025.7193%2049.1666Z'%20stroke='url(%23paint0_linear_804_2254)'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3crect%20x='1'%20y='0.5'%20width='64'%20height='64'%20rx='24'%20stroke='url(%23paint1_linear_804_2254)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_804_2254'%20x1='16.6688'%20y1='23.0472'%20x2='39.6598'%20y2='23.3066'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF00FF'/%3e%3cstop%20offset='1'%20stop-color='%2300BBFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_804_2254'%20x1='61.7057'%20y1='64.5'%20x2='3.46322'%20y2='1.26542'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300BBFF'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_804_2254'%3e%3crect%20x='1'%20y='0.5'%20width='64'%20height='64'%20rx='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const MailIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%204H4C2.9%204%202.01%204.9%202.01%206L2%2018C2%2019.1%202.9%2020%204%2020H20C21.1%2020%2022%2019.1%2022%2018V6C22%204.9%2021.1%204%2020%204ZM19.6%208.25L12.53%2012.67C12.21%2012.87%2011.79%2012.87%2011.47%2012.67L4.4%208.25C4.29973%208.19371%204.21192%208.11766%204.14189%208.02645C4.07186%207.93525%204.02106%207.83078%203.99258%207.71937C3.96409%207.60796%203.9585%207.49194%203.97616%207.37831C3.99381%207.26468%204.03434%207.15581%204.09528%207.0583C4.15623%206.96079%204.23632%206.87666%204.33073%206.811C4.42513%206.74533%204.53187%206.69951%204.6445%206.6763C4.75712%206.65309%204.87328%206.65297%204.98595%206.67595C5.09863%206.69893%205.20546%206.74453%205.3%206.81L12%2011L18.7%206.81C18.7945%206.74453%2018.9014%206.69893%2019.014%206.67595C19.1267%206.65297%2019.2429%206.65309%2019.3555%206.6763C19.4681%206.69951%2019.5749%206.74533%2019.6693%206.811C19.7637%206.87666%2019.8438%206.96079%2019.9047%207.0583C19.9657%207.15581%2020.0062%207.26468%2020.0238%207.37831C20.0415%207.49194%2020.0359%207.60796%2020.0074%207.71937C19.9789%207.83078%2019.9281%207.93525%2019.8581%208.02645C19.7881%208.11766%2019.7003%208.19371%2019.6%208.25Z'%20fill='black'/%3e%3c/svg%3e";
const PhoneIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.62%2010.79C8.06%2013.62%2010.38%2015.93%2013.21%2017.38L15.41%2015.18C15.68%2014.91%2016.08%2014.82%2016.43%2014.94C17.55%2015.31%2018.76%2015.51%2020%2015.51C20.55%2015.51%2021%2015.96%2021%2016.51V20C21%2020.55%2020.55%2021%2020%2021C10.61%2021%203%2013.39%203%204C3%203.45%203.45%203%204%203H7.5C8.05%203%208.5%203.45%208.5%204C8.5%205.25%208.7%206.45%209.07%207.57C9.18%207.92%209.1%208.31%208.82%208.59L6.62%2010.79Z'%20fill='black'/%3e%3c/svg%3e";
const FacebookIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARiSURBVHgBvVhdaBxVFP7u3dnMmsZka5smbfOzC0oRxHYRgooPFQSDfVChEqtCt6hPVqWCEkq1W1NqBaHaaBow2rRGCgaxqM+x6otaxVRFcUF2SU1rE+NOTdvdzc7c45mNTQy7s/Nj9IM7O3PvOed+c869555ZgYBo/YBi/NMlCE0KWCNISQE5RSGctQjnpu8X4wgA4Ue4dZQ2Q6jtJMR9TCTqIj7B5sdg4fhvPeITLCehNaPmw4JkH0BxBAEhqyBT0z3imJtoTULRE/mYjvBREtiMZQDH9JuCCm01toks/BJa9U7xERmS/SzgFhp/IExaQvTOPKSNwCuh5pFSL2u+hP8SJj0/ndT3w41Q8/HSHiLVh/8BEvTE1PbIAJwINQ5d6aoLyS8REE11At0dEi3XCOghIFckXMgDMwXCFxcUFFWokLCsW6YfW/FtBaGGt6lZp8JXfBuDT3Q0CBy8LYy72qS9cKsi8V4RZy9RlRGRtaSeMHYIw37SrnbrZuFF3k0xBCDz4T11aGtwySDMhVTVgZim8nv5ZleZnn2JHsnFhNQzCIDxbRF0XOuezjadKGBiluBA1mS0zu5snJH2s6RwCpzv/bae66UnMmWoGrYUaWEp99hi5ZApZSc+gl90d4Qcx0bTJn4xFmNk5IlD5jwHjyRXHvwjpUVfm72TBTsRABuuk1X7ez8rYvBMCT4RhR5OaEqpe4XwdcYuoF6rrneSvQPl3+MWcLdGSmyE8K9cC/k5VTM8ThAKGzWh1PrlpYMyGbICWb1RsxStCxYwe2Z7UlGFEAJ5iLFSExbqvVRFN7eEsOWG8JK+Jr264q4uHQVzkdDERYV3v5+DKwiNGjv3Tyg0ucnetFpi9x0ReMEzt+pLnj9Oz2HkTNFVj1/vskYmcryoXQnhXyy0H6csryE8r/H2/Mk+T9wkiYIzOv2rOZ+RXcBLb1KSstLlXeHSoBAYkxcteJqDaFwjS5zkkD3tZvS7cyXsH7u8pG/n7fWIRioX9iufX0GhtOiRH86bHkMmPxJIZaL63Ao+6cl37fzzs6vQGa08z9b2/Y5cwZ9L+bUmCgdaOiVScYPjO1RO9X6bUzVB/m0pRWO2rpxnp94gi7ut+QzrtTnCpx27SaJ9C4QKL6/NklL98xnWR3Pg49+OGLI5LBCyUbKKKfZRdjlC5jNc2dKlyHNXVRcLmlfjBsFKetmeC9vUiY9Sfmw8gCPRXCUhhnmo/VOWecq7Mcca2WPeUbtLh9Z9/U/VipJPHV7fLyxKeVrUTnw86PKh/oJ5uL3i67hqDWoOtO9jrz/Ju8WoGX8HUA0dJmOw7a3mQFvVr2PpaHWw/XUlrATvvrSzyx10ncJEOMWfqgm2/b7TtBpqYTCe5Tk34PFMkrnvZYsxeECVRZ8GaQfwVpvr/0MavODN+DBfh/FoppsP2Qc5k27hdLoajoRgH8YGy9nn5DEMxU/BIwJXr0hmNtHRmE0qxq3l794pbobYkT2N4XgWAfAXbITZMhC9drcAAAAASUVORK5CYII=";
const TelegramIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUGSURBVHgBxZhrbBRVFMf/985sd7t9grhIW8I0gLRoQ8vTDxIrnyRRIg9j/AKSoKERxW8SY+wiHw2JMSGND4KERBMlQAzRGFMkMT54aJdXWh62U7pN25XWpd3uoztzr2e20gfdx+z24S+5u/M4c+c/55x77p1hyJGnTndoUPh6GLwEkB7JwDmTAcakPy5k96WtlT7kAMvGmETUSyi7JPAiXViawbyLWrOU/MTFbRXnMJOC1p/y7wTEQdrUkBs6wL0k7Hgmw7SCaiksDqEco5DUYwbgYG0xbm72ba3UU9ukYP2pzl2q4C2QJIZiNBNNSFnlEPzCmpMde1PdN6mH1p3sfF9CHsRswpj38vYlBzMKWv1NZyOD9GJOYPv/eGnJx5OOTNxZc6rzaWnInzGHSM7WtexYchkPC6o783cZi4V+Qe4jKVd0EUadb3dl0NoZT+rY4CEpoVHDHDeNu9H4QEbCQ7VfUdVlsgOzhCdfRZlbga8/lspEijzx2NVtywLq6K7pTVMBcqLIwfFCZSGerSjAWo8L3SEDz5/tSmXOeBTv0v/bCUHkuU0J/00X8vfGRW7srCpBzSMuuNTxMdMTNugW6e7BdtUea/Gqq7/UNxnSXIxpsHahC8+Uu7F1aXHCMxZD0TicioPKzajNnfsjmZ651FQLa1XDNLbIrKbY/652cryyojQhZOV859hxQ0h09A6hqMCBIpdj7PjvPeEMHgIUJjergmEVbGI9/cayAuxYXoR1C/OnnO8NRtDdP4zFCwrhKXFNOucPxZEpKQR4jUpG5SyD8jWefNRTcm5fRiHJm5r8w1EDnfdCGIrEsXxRMeYXOied74sYuDkQQyYEWLUKIcpkikm/ikLxztoFSb1hYYWnZyCMnmCY3M1QVV6CEnfeFLs2Gu52xgxNWfNUMnQjhTOtPMlXkosdjIygnXIlZgg4VY7HSYw7T01q+1tv5vyxIItiEiSHSFtxMoNfu8OJVl7oSNSTLUuLsGKeE3pgCAOh0RA4Ka+qK0pJlJLyRr5AxGZVkWFW/cVNq0JrsMnLmhvPlY3miMuhoKqiJK0YWl+j9sRt2NPDbnPKpNZs5h7fwMjY9ZqnIK0Yiz/7IrQws9k/RDcXkLes+NptrcE4/MMmTCHwwxUdN7r60wq62Bux3bf1vJyZ8ky2M/Sl/pGEIIsb/nv4+lI7/EPxpIIu9Azb79s0z/KoGvXRXjAbRed6Ytb6OHHDIEXwcNsItpzuwGdXBiaJMcnGCpmdPslDXbf2PNHM9d11QYrx0TRr8yktGDNxnXLJSqfPOyX+of9QXODDywG81dyNAE2kFr5ANFGr7PRJNFs/iSJT1dSqGapsx9hUmJl5NE1FTCAqpp6zysSBDR58+9d9/KiHYAfDQKXeUK2PCVj66fWPaE20H/8DJOLonddX7rG2xyYm0xH3Uij1mXoHy6LpXCoHJogbR2u6Vs8Z/wlziJTqho6GFRcf7E+auvWGmvNMYv+cOUeK9yaKsUiaxNonNxppXHsxmzA06nuf/GDq4RRUNl3dJwU7RAMv02eX7KCaJyBeu/vGqpNIqjMNWlOLBun4jopWNWaG84wbu/WGOj2Vga26ox25+irFvFFKpiEn5DVqh+/uWzW970MPU950fZNimDslY/TahMUZOu6jIfO9EOy4/82a87BJDu8bo2hHWmrjJsoVKBWS80eFNCWTjL4xxgcVlV9IF5Z0/AvRvkz++PtnNQAAAABJRU5ErkJggg==";
const InstagramIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqcSURBVHgBpZgPkFVVHce/99x/7+0fdtldNh8s8BSRqAQsNZWUxVSaGgTSJksS0EZzssTKmmaa2cdMMzVZiTmjM44NmDVamiwjplPpbo0O8kdZEI1ghEcKLiwLy+7b9+/ee07fc+7b97bEQrj647x777nn9zm/f+ectXCG19KVO9Iu0OlKNFlKNTlSwlI46YU46CiZfeipS/twBpf1YTrfuHxbp2WLFVS8lEqbHakwJraqtOYeEFIOuZHqtmS08cfPL+w+XR2nBXTTTVtXsukSUGlXK1QSLi3iVCB0a8saUCwwrYigAbN+FGXuemXRY2cFtHJpTxpw17FXp1aqIVw1BqQBalDjQfRz21iJwveCA9CqWl02KpUW3tm3LPuhge687m8rpK3WCqmaXQ0wJlWoClDFXfa4VvB7I8oyKiwo8yRWZg3x55pbtly/9rSBVl/1YpeyooxW4CJCU6OLOZ9NYUKLh2S9g0TChuNasAWVWbFyo1TrrUhUjhCNhghGAuSP5HF0ywDy/fmKSqHxMl/avmTN/wX63hXPd3HwjA2JiRNdXHnzDFzyxXPh+AJnc6lI4cCG/di3/p8oEEzbkQa854btN6z9QKAffGZDpy3tHseK0NLmYcXDC9Ccqo8HDBWGDw2jOFgwFrDoLmMUFQ9SHYgmo+FgifiJU+dgwuy2qo7cv3LY8s0eFA4X4q9ktHBx31d63weUuWxDWrmyx5ZR2mes3Pr459B2XpNRuueZPdj16A6EJwqMEwYs4jjRLhUVICGrgWtaHTnx/xbqUo2YdvPHMO2rHze6jm8/im23/9X0VZbIFmXhomV9q4b0u6ofLLuc8WSQTqgAcxZ1xDC8XntwC16772Wo4yPw+M5XYUUCIx7K8LWIEnybrcXWChh7IfuHSHhAeHQYb9/3KvY/sM2M2XJxO6Zc2wGH8emoMN0gkl1jHAboJ5c9kXZVtEIrSHKQuUvONy9P7BvEvt/1VZX7MjBQrgaRlZb93THRzzSMiAGbzmvAlS+vQue229A+P4VD63ZgeEe/GXvql2dpGJM0tgpW98xbl64CCSvIJPhSw2gLnTOn3Xx0oPtNA+DJWLH5Xb2Pn9Uz89o+mULrp1Koa/UIFRpQh5K6/gJYThwVrZd3GIDjL+wz98lpjcZCDBE+jzTFahNz+h8PcknC1JkISVfHZTxIYf+AsYypxJCxKF1fJNoWXoDJyy9B47yOan8TtDsPYeCpHRj805sY/OMOtC6aBVHn4cRzb8CxQshc0fTzWuvgJgSiQsTEUBxDrKCVMs6Dlz/KdSls9hGawtfQ6FcH17PVljDrFGGEAVOY9q2FmLLqCpzqapg7xUj9zEk4vPYl/OMLD3Pa/CpgERVM9Vy+mk5evUA5X2Zg6+RQzcyGeY4L2ekRJHZJhISfqA7uaPNTajASHbcvqMIU9/bj2NPbkHvlbdh1LupmT8Ekvvc6JqJ9xacRDY7g2OOvAuXQRIfif1axUJuwb9FpESTH1lCutJY6vozmuhUY7TJfL0CVyzZZFMRpbkkkUs2YfMeC2J1vHcb+rz8KNVoyac/NB07ufQ+5l97EtIduQXLOVJxzVyeGN76O8KR2k64FlCCsjW9r90d0lyKUtpo1V9AlaWMdKtbp69lB9QNPp7BbgOfm4Tt5tMyfVi14h767HmI0R+uFBA4NvM1xMJzDe99/goWUijwHLcvmmWDWfQRbIWtAwuG9ec7gpqXohbTjqfJ0XxDG0qkasG54NSA/D5nI8SNpDN589ezYOq/vhXXiXXgek1RSIr5VlSWV64E8fAzFviySF89A8sIp5nsduMZlquYBbXVbMNBZVCsWmu7UeaNxQWPt8DTQuBhyvQJUctTEj1487QkxrDx6BG6SwRnRWhEdqoFC2j90oCRbwkXvDgIEctoajGXidFAGrgpkJhrFxUcymgnr1PkxkEdxSev544LOK7FgFMysNJQ6QSWYCbejjSlbMEAaxlhIw2i4MlMgdOFMnmjGUCMFozS2j82J1YAsE3lRXAx16eBEnERi9CBdlXYJ5NjMKnd8FpQBAlrG1ArR27uB+ZfB+8RsuO0e1NAIQSpWCu0YipFqTZqIxKUzY/e+9IaZkNanUcQ4l1k6oM1TvSBr6PCgSPj5rJ9g0CaK8KnccYu1LPAIyecOraHbcOsLVBoHffOaDJyJjnlu+xTTFgxo60+/EQ/ASRRf2WVcppWbjBKqOj4iWbGSNHkqrDArXK+40+OArh6MrWPna0A+y7p+5peouARRPoLShkfMOyc9A00/exCJ666GN3My3OmtqL9pMZp//iO4s9KmT+7XG4DB9yBoee0ao9wet+OJwth6Jpb0dibc6fjJQjdj527tLh3xtjUyzkJMUbptzGW6lIS9jyNsboJz7XKIdq5fd9yLU12FPzyDwm9/z0nFiaC0YXX8+nbNZYV4bJN9FEegx+Fi1ue6pSHbCZttHhHs6HgNqE5UgGLzW5XtafDcLyH798CZfyPEefNqFDrO9uxCaVM3Sn/fSuVebcfFchDpdbChVlbk8GhlshLSsoZm93VtdM5d3z3U/+2rHnPs6G4htI8ZXCEhHA8iNRUqGxrrVPfMxt282/ksgtc3AfWTYLXPMBaI3jkIeTzH3w6E544DZX8Z1yp7UmPsrROjUCU9Wdsszuxhzm4m45Qor7U9VlojLFTv7orjZM41nCWDMUE/U0RVCO5XpHQE6sBmgm/lOnWMIAGEG7BKB/HvcaKTpGHxJWbs4MDRymkkFjKvqQKl1r7K6I4e0MrsBM3e96T5SEy9CM5Vt3L7wFNCPWfCE4fVQCdTLHPPz5P0CjcIlkdwTsZyKWztCpiB060ToP5r18D96NQ44J/eXIURllo/uy+TNUao+tOJMm7CWsINVRrZF6GOsH585ELYC74D2ZKC3E3IXL9xmRVnKV1DV3LzjzKlxOWBFUO7Pa40dAPdZOl1bEIr6m5YjsTiz5s3pd0HkX92q1HPfVC2bIXV49B/nDoK91/cKXyrx3I5UPNk2It+BauxoxqwapRA5RxTjZojHTRRfOzQC5EGHAPVcWFzCUo00DpsW9p4H8896h/AwG33ofxOkV09cD4LZ+7+Re8pgfRV/s381cJ172cNABpTEOcvgzVjmT7X4GwuFQQobnoeuXUbEQwwLIpJ7kT8NTN2358Z3++UJ9dgw3UZ4fldBkroOGmnxWaB5xmuJ03MQAaO8baILWcso0zl5TmL6xktxwxS+SKigWOQR46jtHk7wmNlyFISYSGBoJhYM337I5n/1v2BZ/vyX25cbXtuF33cbKDGuqqKch4UlQYIpdkRaggDUuBvvU/mMVqOsr6wzkYjrMU57niKPmQhMRSW3HtSvU+uP5Xe//nXD7V5ZVo5Xg/dla4BVY6rGoaiN2IICKB3giXCFEMDJQ0Qn49IRMPcEQ5zzR91ekuhvyrV3Z39IJ2n9fehcNfqlUIIHuYIpmLrxC4iTEiIIIq3pqWAxY5CIOT1CYMywqwbUdloWGYmPPzns/v70PvA3vrhUrpwKZeQJdCnBL0dDStQ5SDezBcZO0X+zpeHCNMdjZQfS967qfd0dXwooPGX2puZR5C0jOR0hOVmDUWgIVUsnbSHg15r2foszuD6N0R0eY11LCF4AAAAAElFTkSuQmCC";
const MessengerIcon = "/assets/messenger-DhxflJ7d.svg";
function Welcome() {
  return /* @__PURE__ */ jsx("main", { className: "w-full h-full min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-5 items-start justify-center pt-14 mx-4 md:mx-20 py-[56px] md:py-[72px] lg:py-[157.5px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-[64%] flex flex-col", children: [
      /* @__PURE__ */ jsx("p", { className: "font-syncopate font-bold text-black text-[32px] md:text-[40px] lg:text-5xl", children: "Hey There! It's" }),
      /* @__PURE__ */ jsx("p", { className: "font-syncopate font-bold text-[40px] md:text-5xl lg:text-[64px] gradient-text mt-2 mb-4", children: "Dee Dee" }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-fit mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "gradient-text text-sm md:text-base font-normal underline", children: "Sharing Stories, Skills, and Smiles" }),
        /* @__PURE__ */ jsx("div", { className: "bg-gradient h-[1px] w-full -mt-[6px]" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl leading-[32px] text-wrap whitespace-normal break-words font-normal max-w-[738px] mb-6", children: "I’m from Myanmar and love sharing my adventures, tips, and ideas with the world. Whether it’s discovering hidden gems, sharing wellness advice, or exploring the latest trends, I enjoy inspiring others to live their best lives. My goal is to turn everyday experiences into something meaningful and exciting for my community." }),
      /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx("div", { className: "gradient-text px-[34px] py-2 text-xl", children: "Let's Explore Together" }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-start gap-5 mt-[72px] flex-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card bg-no-repeat bg-center bg-cover p-6 rounded-3xl w-[359px] h-[237px] flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: ChatIcon, width: 64, height: 64, alt: "chat-icon" }),
          /* @__PURE__ */ jsx("p", { className: "font-bold text-2xl", children: "Let’s chat!" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("img", { src: PhoneIcon, width: 24, height: 24, alt: "phone-icon" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "09123456789 • 09123456789" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("img", { src: MailIcon, width: 24, height: 24, alt: "mail-icon" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "austintao.lifestyle@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card bg-no-repeat bg-center bg-cover p-6 rounded-3xl w-[359px] h-[237px] flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: LeafIcon, width: 64, height: 64, alt: "chat-icon" }),
          /* @__PURE__ */ jsx("p", { className: "font-bold text-2xl", children: "Follow me on" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("a", { href: "http://www.facebook.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: FacebookIcon, width: 36, height: 36, alt: "facebook-icon" }) }),
            /* @__PURE__ */ jsx("a", { href: "http://www.telegram.org", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: TelegramIcon, width: 36, height: 36, alt: "telegram-icon" }) }),
            /* @__PURE__ */ jsx("a", { href: "http://www.instagram.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: InstagramIcon, width: 36, height: 36, alt: "instagram-icon" }) }),
            /* @__PURE__ */ jsx("a", { href: "http://www.messenger.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: MessengerIcon, width: 36, height: 36, alt: "messenger-icon" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-[36%] flex items-start justify-center", children: /* @__PURE__ */ jsx("img", { src: "/images/person.png", alt: "A Person", className: "w-full h-[576.55px] md:h-[981px] lg:w-[522px] lg:h-[760px] rounded-tl-[56px] rounded-tr-[56px] rounded-br-[0px] rounded-bl-[220px] border-white border-[20px] object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "block lg:hidden w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start gap-5 mt-8 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "card flex-1 w-full p-6 rounded-3xl h-[237px] flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: ChatIcon, width: 64, height: 64, alt: "chat-icon" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-xl md:text-2xl", children: "Let’s chat!" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: PhoneIcon, width: 24, height: 24, alt: "phone-icon" }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", children: "09123456789 • 09123456789" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: MailIcon, width: 24, height: 24, alt: "mail-icon" }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", children: "austintao.lifestyle@gmail.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card flex-1 w-full p-6 rounded-3xl h-[237px] flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: LeafIcon, width: 64, height: 64, alt: "chat-icon" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-xl md:text-2xl", children: "Follow me on" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "http://www.facebook.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: FacebookIcon, width: 36, height: 36, alt: "facebook-icon" }) }),
          /* @__PURE__ */ jsx("a", { href: "http://www.telegram.org", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: TelegramIcon, width: 36, height: 36, alt: "telegram-icon" }) }),
          /* @__PURE__ */ jsx("a", { href: "http://www.instagram.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: InstagramIcon, width: 36, height: 36, alt: "instagram-icon" }) }),
          /* @__PURE__ */ jsx("a", { href: "http://www.messenger.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: MessengerIcon, width: 36, height: 36, alt: "messenger-icon" }) })
        ] })
      ] })
    ] }) })
  ] }) });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DUym19s2.js", "imports": ["/assets/chunk-SYFQ2XB5-D3hMhDC0.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DcA6oN-9.js", "imports": ["/assets/chunk-SYFQ2XB5-D3hMhDC0.js", "/assets/with-props-DIjtTHdS.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-Dt0fTmRn.js", "imports": ["/assets/with-props-DIjtTHdS.js", "/assets/chunk-SYFQ2XB5-D3hMhDC0.js"], "css": [] } }, "url": "/assets/manifest-814d437e.js", "version": "814d437e" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
