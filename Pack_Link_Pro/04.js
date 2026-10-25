<!doctype html>

<html lang="en">

  <head>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Packlink PRO | Rug & Textile Shipping</title>

    <script src="https://live.zwidgets.com/js-sdk/1.2/ZohoEmbededAppSDK.min.js"></script>

    <style>

      :root {

        --ink: #2d2925;

        --muted: #786d62;

        --terracotta: #a94f35;

        --terracotta-dark: #853b28;

        --cream: #fbf6ee;

        --sand: #efe0ca;

        --line: #e4d4c0;

        --green: #244b3e;

        --white: #fff;

        --blue: #0874c9;

      }

      * {

        box-sizing: border-box;

      }

      html,

      body {

        margin: 0;

        min-height: 100%;

        font-family: Inter, "Segoe UI", Arial, sans-serif;

        color: var(--ink);

        background: #f6f0e7;

      }

      button,

      input,

      select {

        font: inherit;

      }

      .topbar {

        height: 58px;

        background: #fffaf4;

        border-bottom: 1px solid var(--line);

        display: flex;

        align-items: center;

        justify-content: space-between;

        padding: 0 20px;

        position: sticky;

        top: 0;

        z-index: 5;

      }

      .brand {

        display: flex;

        align-items: center;

        gap: 10px;

        font-weight: 800;

        font-size: 17px;

      }

      .brand-icon {

        height: 34px;

        width: 34px;

        border-radius: 10px;

        display: grid;

        place-items: center;

        color: #fff;

        background: repeating-linear-gradient(

          45deg,

          #a94f35 0 4px,

          #e5bd8c 4px 8px

        );

        border: 2px solid #fff;

        box-shadow: 0 0 0 1px var(--line);

      }

      .brand small {

        display: block;

        font-size: 10px;

        font-weight: 500;

        color: var(--muted);

        margin-top: 2px;

      }

      .brand-pro {

        color: var(--terracotta);

      }

      .status {

        font-size: 10px;

        font-weight: 800;

        letter-spacing: 0.05em;

        border: 1px solid #e6c88f;

        background: #fff5dd;

        color: #805819;

        border-radius: 20px;

        padding: 7px 10px;

      }

      main {

        max-width: 1100px;

        margin: 0 auto;

        padding: 22px 20px 35px;

      }

      .intro {

        display: flex;

        justify-content: space-between;

        align-items: flex-end;

        gap: 16px;

        margin-bottom: 18px;

      }

      .eyebrow {

        font-size: 10px;

        letter-spacing: 0.17em;

        font-weight: 850;

        color: var(--terracotta);

        text-transform: uppercase;

      }

      .intro h1 {

        font-family: Georgia, serif;

        font-size: 29px;

        line-height: 1.15;

        margin: 6px 0;

      }

      .intro p {

        font-size: 13px;

        color: var(--muted);

        margin: 0;

        line-height: 1.5;

      }

      .banner {

        position: relative;

        overflow: hidden;

        border: 1px solid #e0c4a2;

        border-radius: 14px;

        background: linear-gradient(

          110deg,

          #f2dfc4 0%,

          #fff8ee 57%,

          #e8d1b3 100%

        );

        padding: 20px 23px;

        margin-bottom: 21px;

        min-height: 125px;

        display: flex;

        align-items: center;

      }

      .banner:before {

        content: "";

        position: absolute;

        right: 0;

        top: 0;

        width: 43%;

        height: 100%;

        opacity: 0.28;

        background:

          repeating-linear-gradient(

            45deg,

            transparent 0 16px,

            #bd8c62 17px 18px,

            transparent 19px 32px

          ),

          repeating-linear-gradient(

            -45deg,

            transparent 0 16px,

            #bd8c62 17px 18px,

            transparent 19px 32px

          );

      }

      .banner-copy {

        position: relative;

        z-index: 1;

        max-width: 70%;

      }

      .banner h2 {

        font-family: Georgia, serif;

        font-size: 21px;

        margin: 7px 0;

      }

      .banner p {

        font-size: 12px;

        color: #756354;

        margin: 0;

      }

      .rug-art {

        position: absolute;

        right: 27px;

        top: 17px;

        width: 125px;

        height: 86px;

        transform: rotate(-8deg);

        border: 5px solid #a64d34;

        border-radius: 5px;

        background: repeating-linear-gradient(

          0deg,

          #d4a76e 0 7px,

          #873e2b 7px 10px,

          #f0d5a8 10px 16px

        );

        box-shadow: 4px 8px 0 #9e805e55;

      }

      .rug-art:before {

        content: "◇  ◆  ◇";

        position: absolute;

        inset: 13px 8px;

        border: 2px solid #f4d7a3;

        color: #f4d7a3;

        display: grid;

        place-items: center;

        font-size: 17px;

        font-weight: 900;

      }

      .rug-art:after {

        content: "";

        position: absolute;

        left: -13px;

        top: 0;

        width: 12px;

        height: 100%;

        background: repeating-linear-gradient(

          0deg,

          #f5dfb6 0 4px,

          #a94f35 4px 7px

        );

        border-radius: 3px;

      }

      .steps {

        display: flex;

        align-items: center;

        gap: 10px;

        margin: 0 0 16px;

      }

      .step {

        display: flex;

        align-items: center;

        gap: 8px;

        font-size: 12px;

        font-weight: 750;

        color: #9a8b7d;

      }

      .step-num {

        width: 28px;

        height: 28px;

        border-radius: 50%;

        border: 1px solid #d8c8b6;

        background: #fff;

        display: grid;

        place-items: center;

      }

      .step.active {

        color: var(--terracotta);

      }

      .step.active .step-num {

        background: var(--terracotta);

        border-color: var(--terracotta);

        color: white;

      }

      .step.done {

        color: var(--green);

      }

      .step.done .step-num {

        background: var(--green);

        border-color: var(--green);

        color: #fff;

      }

      .step-line {

        width: 55px;

        height: 1px;

        background: #dfcbb4;

      }

      .panel {

        background: #fffdf9;

        border: 1px solid var(--line);

        border-radius: 13px;

        overflow: hidden;

        box-shadow: 0 6px 20px #6b4a2710;

      }

      .panel-head {

        padding: 19px 22px 15px;

        border-bottom: 1px solid #efe4d7;

      }

      .panel-head h2 {

        font-size: 17px;

        margin: 0 0 5px;

      }

      .panel-head p {

        font-size: 12px;

        color: var(--muted);

        margin: 0;

      }

      .panel-body {

        padding: 20px 22px;

      }

      .address-grid {

        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 16px;

      }

      .address-card {

        padding: 16px;

        border: 1px solid #e8d9c7;

        border-radius: 10px;

        background: #fffefa;

      }

      .address-card h3 {

        font-size: 13px;

        margin: 0 0 14px;

        display: flex;

        align-items: center;

        gap: 8px;

      }

      .address-icon {

        width: 27px;

        height: 27px;

        border-radius: 8px;

        background: #f5e5d2;

        color: var(--terracotta);

        display: grid;

        place-items: center;

      }

      .fields {

        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 11px;

      }

      .field {

        min-width: 0;

        display: flex;

        flex-direction: column;

        gap: 5px;

      }

      .field.full {

        grid-column: 1/-1;

      }

      .field label {

        font-size: 11px;

        font-weight: 750;

        color: #5e5146;

      }

      .field input,

      .field select {

        width: 100%;

        min-width: 0;

        height: 38px;

        border: 1px solid #dfd0bd;

        border-radius: 6px;

        background: #fff;

        padding: 0 10px;

        font-size: 12px;

        color: var(--ink);

        outline: none;

      }

      .field input:focus,

      .field select:focus {

        border-color: var(--terracotta);

        box-shadow: 0 0 0 3px #a94f3514;

      }

      .divider {

        height: 1px;

        background: #efe4d7;

        margin: 20px 0;

      }

      .parcel-head {

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 10px;

        margin-bottom: 12px;

      }

      .parcel-head h3 {

        font-size: 13px;

        margin: 0;

      }

      .small-link {

        border: 0;

        background: transparent;

        color: var(--terracotta);

        font-size: 11px;

        font-weight: 800;

        cursor: pointer;

      }

      .parcel-grid {

        display: grid;

        grid-template-columns: 1.3fr repeat(4, 1fr);

        gap: 11px;

      }

      .actions {

        display: flex;

        justify-content: space-between;

        align-items: center;

        gap: 12px;

        margin-top: 20px;

      }

      .hint {

        font-size: 10px;

        color: #8b7d70;

        line-height: 1.4;

      }

      .btn {

        border: 1px solid transparent;

        border-radius: 7px;

        padding: 0 16px;

        min-height: 40px;

        display: inline-flex;

        align-items: center;

        justify-content: center;

        gap: 8px;

        font-size: 12px;

        font-weight: 800;

        cursor: pointer;

        transition: 0.15s;

      }

      .btn-primary {

        background: var(--terracotta);

        color: #fff;

      }

      .btn-primary:hover {

        background: var(--terracotta-dark);

      }

      .btn-secondary {

        background: #fffaf4;

        color: #5d4c3e;

        border-color: #ddcbb5;

      }

      .hidden {

        display: none !important;

      }

      .summary {

        display: flex;

        justify-content: space-between;

        align-items: center;

        gap: 12px;

        flex-wrap: wrap;

        padding: 15px 18px;

      }

      .summary-title {

        font-size: 12px;

        font-weight: 800;

      }

      .summary-sub {

        font-size: 11px;

        color: var(--muted);

        margin-top: 4px;

      }

      .results-head {

        display: flex;

        justify-content: space-between;

        align-items: flex-end;

        gap: 12px;

        margin: 19px 0 12px;

      }

      .results-head h2 {

        font-family: Georgia, serif;

        font-size: 23px;

        margin: 0 0 4px;

      }

      .results-head p {

        font-size: 11px;

        color: var(--muted);

        margin: 0;

      }

      .sort {

        display: flex;

        align-items: center;

        gap: 7px;

        font-size: 11px;

        color: var(--muted);

      }

      .sort select {

        border: 1px solid #dfd0bd;

        border-radius: 6px;

        background: #fff;

        padding: 7px;

        font-size: 11px;

      }

      .filters {

        display: flex;

        gap: 7px;

        flex-wrap: wrap;

        margin-bottom: 12px;

      }

      .chip {

        border: 1px solid #ddcbb5;

        background: #fffdf9;

        color: #665547;

        border-radius: 999px;

        padding: 8px 12px;

        font-size: 11px;

        font-weight: 750;

        cursor: pointer;

      }

      .chip.selected {

        background: #f5e2d1;

        border-color: #c98568;

        color: #8b3e29;

      }

      .rate-list {

        display: flex;

        flex-direction: column;

        gap: 11px;

      }

      .rate-card {

        background: #fffdf9;

        border: 1px solid #dfd0bd;

        border-radius: 10px;

        overflow: hidden;

      }

      .rate-main {

        display: grid;

        grid-template-columns: 66px 120px minmax(110px, 1fr) minmax(

            110px,

            1fr

          ) 125px;

        gap: 13px;

        align-items: center;

        padding: 15px;

      }

      .eta {

        align-self: stretch;

        margin: -15px 0 -15px -15px;

        background: var(--green);

        color: white;

        padding: 12px 8px;

        display: flex;

        flex-direction: column;

        justify-content: center;

        border-radius: 9px 0 0 9px;

      }

      .eta strong {

        font-family: Georgia, serif;

        font-size: 24px;

      }

      .eta span {

        font-size: 9px;

        line-height: 1.5;

        margin-top: 4px;

        letter-spacing: 0.04em;

      }

      .carrier {

        text-align: center;

      }

      .carrier-logo {

        font-weight: 950;

        font-size: 23px;

        letter-spacing: -1px;

        color: #253e55;

      }

      .carrier-logo.ups {

        color: #65421e;

      }

      .carrier-logo.evri {

        font-family: Georgia, serif;

        color: #2b86b9;

        font-size: 27px;

      }

      .carrier-logo.dhl {

        color: #d71920;

        font-style: italic;

      }

      .carrier-logo.fedex {

        color: #4d3788;

      }

      .carrier small {

        display: block;

        color: var(--muted);

        font-size: 10px;

        margin-top: 6px;

      }

      .service-title {

        font-size: 10px;

        font-weight: 850;

        line-height: 1.4;

        margin-bottom: 6px;

      }

      .service-desc {

        font-size: 10px;

        line-height: 1.5;

        color: #796c60;

      }

      .price {

        text-align: right;

      }

      .price strong {

        display: block;

        font-size: 24px;

        font-family: Georgia, serif;

        margin-bottom: 10px;

        color: var(--green);

      }

      .price .btn {

        width: 100%;

        padding: 0 8px;

      }

      .rate-meta {

        border-top: 1px solid #efe4d7;

        padding: 9px 14px;

        display: flex;

        align-items: center;

        flex-wrap: wrap;

        gap: 15px;

        font-size: 10px;

        color: #756657;

      }

      .details-toggle {

        margin-left: auto;

        color: var(--terracotta);

        font-weight: 800;

        cursor: pointer;

      }

      .rate-details {

        padding: 12px 15px;

        background: #fbf5ec;

        border-top: 1px solid #efe4d7;

        color: #756657;

        font-size: 11px;

        line-height: 1.7;

      }

      .empty {

        padding: 25px;

        text-align: center;

        border: 1px dashed #d8c8b6;

        border-radius: 9px;

        background: #fffdf9;

        color: var(--muted);

        font-size: 12px;

      }
      .no-rates-empty { padding: 28px 22px; text-align: center; }
      .no-rates-empty h3 { margin: 0 0 8px; color: var(--ink); font-size: 18px; }
      .no-rates-empty p { max-width: 560px; margin: 0 auto 16px; color: var(--muted); line-height: 1.55; }
      .no-rates-empty button { border: 0; border-radius: 8px; padding: 10px 18px; color: #fff; background: var(--terracotta); cursor: pointer; font-weight: 700; }


      .footer-note {

        text-align: center;

        font-size: 10px;

        color: #948578;

        margin-top: 15px;

      }

      .toast {

        position: fixed;

        left: 50%;

        bottom: 18px;

        transform: translateX(-50%);

        z-index: 20;

        background: #244b3e;

        color: #fff;

        padding: 11px 15px;

        border-radius: 8px;

        font-size: 12px;

        box-shadow: 0 6px 20px #0002;

        max-width: 90%;

        text-align: center;

      }

      .toast.error {

        background: #9b3428;

      }

      @media (max-width: 850px) {

        main {

          padding: 18px 13px;

        }

        .rate-main {

          grid-template-columns: 54px 100px 1fr 1fr;

          gap: 10px;

        }

        .price {

          grid-column: 3/5;

          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 10px;

        }

        .price strong {

          margin: 0;

        }

        .price .btn {

          width: auto;

        }

        .parcel-grid {

          grid-template-columns: repeat(3, 1fr);

        }

        .rug-art {

          right: 18px;

          width: 100px;

        }

      }

      @media (max-width: 600px) {

        .topbar {

          padding: 0 12px;

        }

        .status {

          font-size: 9px;

        }

        .intro h1 {

          font-size: 25px;

        }

        .intro {

          align-items: flex-start;

          flex-direction: column;

        }

        .banner {

          padding: 17px;

          min-height: 120px;

        }

        .banner-copy {

          max-width: 75%;

        }

        .banner h2 {

          font-size: 18px;

        }

        .rug-art {

          width: 70px;

          height: 65px;

          right: 12px;

          top: 27px;

        }

        .steps {

          gap: 6px;

        }

        .step {

          font-size: 10px;

          gap: 5px;

        }

        .step-line {

          width: 25px;

        }

        .panel-head,

        .panel-body {

          padding: 15px;

        }

        .address-grid {

          grid-template-columns: 1fr;

        }

        .parcel-grid {

          grid-template-columns: 1fr 1fr;

        }

        .rate-main {

          grid-template-columns: 48px 1fr 1fr;

          padding: 12px;

          gap: 10px;

        }

        .eta {

          margin: -12px 0 -12px -12px;

        }

        .eta strong {

          font-size: 20px;

        }

        .carrier {

          grid-column: 2/4;

          display: flex;

          align-items: center;

          gap: 10px;

          text-align: left;

        }

        .carrier small {

          margin: 0;

        }

        .service-block {

          grid-column: 2/4;

        }

        .price {

          grid-column: 2/4;

        }

        .price strong {

          font-size: 22px;

        }

        .rate-meta {

          gap: 9px;

        }

        .details-toggle {

          margin-left: 0;

        }

        .results-head {

          align-items: flex-start;

          flex-direction: column;

        }

        .sort {

          width: 100%;

          justify-content: space-between;

        }

      }

    </style>

  </head>

  <body>

    <header class="topbar">

      <div class="brand">

        <span class="brand-icon">✦</span>

        <div>

          Packlink <span class="brand-pro">PRO</span

          ><small>Rug & textile dispatch workspace</small>

        </div>

      </div>

      <span class="status">LIVE PACKLINK RATES</span>

    </header>

    <main>

      <div class="intro">

        <div>

          <div class="eyebrow">Thoughtful shipping for beautiful things</div>

          <h1>Create a new shipment</h1>

          <p>

            From your showroom to their doorstep — compare shipping services returned by Packlink PRO.

          </p>

        </div>

      </div>

      <div class="banner">

        <div class="banner-copy">

          <div class="eyebrow">Made for rugs & home textiles</div>

          <h2>Woven with care. Sent with care.</h2>

          <p>

            Careful handling for rolled rugs, folded rugs and textile samples.

          </p>

        </div>

        <div class="rug-art" aria-hidden="true"></div>

      </div>

      <div class="steps">

        <div class="step active" id="step1">

          <span class="step-num">1</span><span>Shipment details</span>

        </div>

        <div class="step-line"></div>

        <div class="step" id="step2">

          <span class="step-num">2</span><span>Shipping rates</span>

        </div>

      </div>



      <section class="panel" id="detailsScreen">

        <div class="panel-head">

          <h2>Where are we sending your parcel?</h2>

          <p>

            Enter the sender, recipient and parcel information to retrieve Packlink PRO rates.

          </p>

        </div>

        <div class="panel-body">

          <div class="address-grid">

            <div class="address-card">

              <h3><span class="address-icon">⌂</span> From — sender address</h3>

              <div class="fields">

                <div class="field full">

                  <label for="fromName">Contact name / company *</label

                  ><input id="fromName" value="Rug Showroom" required />

                </div>

                <div class="field full">

                  <label for="fromAddress">Address line *</label

                  ><input id="fromAddress" value="124 Hills Road" required />

                </div>

                <div class="field">

                  <label for="fromCity">City *</label

                  ><input id="fromCity" value="Cambridge" required />

                </div>

                <div class="field">

                  <label for="fromPostcode">Postcode *</label

                  ><input id="fromPostcode" value="CB2 1RE" required />

                </div>

                <div class="field full">

                  <label for="fromCountry">Country *</label

                  ><select id="fromCountry">

                    <option value="GB" selected>United Kingdom</option>

                    <option value="IN">India</option>

                    <option value="US">United States</option>

                    <option value="FR">France</option>

                    <option value="DE">Germany</option>

                    <option value="ES">Spain</option>

                    <option value="IT">Italy</option>

                    <option value="NL">Netherlands</option>

                  </select>

                </div>

              </div>

            </div>

            <div class="address-card">

              <h3>

                <span class="address-icon">⌖</span> To — recipient address

              </h3>

              <div class="fields">

                <div class="field full">

                  <label for="toName">Contact name / company *</label

                  ><input id="toName" value="Maryam Gholamhosseini" required />

                </div>

                <div class="field full">

                  <label for="toAddress">Address line *</label

                  ><input id="toAddress" value="15 South Street" required />

                </div>

                <div class="field">

                  <label for="toCity">City *</label

                  ><input id="toCity" value="Southampton" required />

                </div>

                <div class="field">

                  <label for="toPostcode">Postcode *</label

                  ><input id="toPostcode" value="SO15 1HW" required />

                </div>

                <div class="field full">

                  <label for="toCountry">Country *</label

                  ><select id="toCountry">

                    <option value="GB" selected>United Kingdom</option>

                    <option value="IN">India</option>

                    <option value="US">United States</option>

                    <option value="FR">France</option>

                    <option value="DE">Germany</option>

                    <option value="ES">Spain</option>

                    <option value="IT">Italy</option>

                    <option value="NL">Netherlands</option>

                  </select>

                </div>

              </div>

            </div>

          </div>

          <div class="divider"></div>

          <div class="parcel-head">

            <h3>Parcel details</h3>

            <button class="small-link" id="resetParcel" type="button">

              Reset sample dimensions ↻

            </button>

          </div>

          <div class="parcel-grid">

            <div class="field">

              <label for="parcelType">What are you sending?</label

              ><select id="parcelType">

                <option value="Rolled rug">Rolled rug</option>

                <option value="Folded rug">Folded rug</option>

                <option value="Rug sample">Rug sample</option>

                <option value="Cushion / textile">Cushion / textile</option>

                <option value="Other parcel">Other parcel</option>

              </select>

            </div>

            <div class="field">

              <label for="weight">Weight (kg) *</label

              ><input

                id="weight"

                type="number"

                min="0.1"

                step="0.1"

                value="12"

                required

              />

            </div>

            <div class="field">

              <label for="length">Length (cm) *</label

              ><input id="length" type="number" min="1" value="60" required />

            </div>

            <div class="field">

              <label for="width">Width (cm) *</label

              ><input id="width" type="number" min="1" value="40" required />

            </div>

            <div class="field">

              <label for="height">Height (cm) *</label

              ><input id="height" type="number" min="1" value="30" required />

            </div>

          </div>

          <div class="actions">

            <span class="hint"

              >Sample rates only. No shipping provider is contacted.</span

            ><button class="btn btn-primary" id="searchRatesBtn">

              Search shipping rates →

            </button>

          </div>

        </div>

      </section>



      <section id="ratesScreen" class="hidden">

        <div class="panel">

          <div class="summary">

            <div>

              <div class="summary-title">Your shipment</div>

              <div class="summary-sub" id="summaryLine"></div>

              <div class="summary-sub" id="summaryAddress"></div>

            </div>

            <button class="btn btn-secondary" id="editDetailsBtn">

              ← Edit details

            </button>

          </div>

        </div>

        <div class="results-head">

          <div>

            <h2>Shipping options</h2>

            <p id="resultCount">No rates loaded yet</p>

          </div>

          <div class="sort">

            <label for="sortRates">Sort by</label

            ><select id="sortRates">

              <option value="relevant">Recommended</option>

              <option value="price">Lowest price</option>

              <option value="fastest">Fastest delivery</option>

            </select>

          </div>

        </div>

        <div class="filters" id="filters">

          <button class="chip selected" data-filter="all">All services</button

          ><button class="chip" data-filter="dropoff">Drop-off</button

          ><button class="chip" data-filter="collection">Collection</button

          ><button class="chip" data-filter="home">Home delivery</button

          ><button class="chip" data-filter="fast">24–48h</button>

        </div>

        <div class="rate-list" id="rateList"></div>

        <div class="footer-note">

          Live service information returned by Packlink PRO. Availability and estimates may change.

        </div>

      </section>

      <div class="footer-note" id="crmStatus">Connecting to Zoho CRM…</div>

    </main>

    <div id="toast" class="toast hidden" role="status"></div>

    <script>

      "use strict";



      /* =========================================================

   ZOHO CRM WIDGET INITIALIZATION

   - Captures the current Deal ID from PageLoad

   - Requests widget resize

   - Does not make CRM or Packlink API calls

\========================================================= */

      let crmDealId = null;

      let zohoSdkAvailable = false;



      function setCrmStatus(message) {

        const el = document.getElementById("crmStatus");

        if (el) el.textContent = message;

      }



      function resizeZohoWidget() {

        if (

          !window.ZOHO ||

          !ZOHO.CRM ||

          !ZOHO.CRM.UI ||

          typeof ZOHO.CRM.UI.Resize !== "function"

        ) {

          console.warn("Zoho CRM resize API is not available in this context.");

          return;

        }

        ZOHO.CRM.UI.Resize({ height: "800", width: "1000" })

          .then(function (response) {

            console.log("Widget resize response:", response);

          })

          .catch(function (error) {

            console.warn("Widget resize request failed:", error);

          });

      }



      if (window.ZOHO && ZOHO.embeddedApp) {

        zohoSdkAvailable = true;



        ZOHO.embeddedApp.on("PageLoad", function (data) {

          console.log("Zoho CRM PageLoad data:", data);



          if (data && Array.isArray(data.EntityId)) {

            crmDealId = data.EntityId.length ? String(data.EntityId[0]) : null;

          } else if (data && data.EntityId != null) {

            crmDealId = String(data.EntityId);

          } else {

            crmDealId = null;

          }



          console.log("CRM Deal ID:", crmDealId);

          window.crmDealId = crmDealId;

          setCrmStatus(

            crmDealId

              ? "Connected to Zoho CRM · Deal ID: " + crmDealId

              : "Zoho CRM loaded · No Deal ID was supplied in PageLoad data.",

          );

          resizeZohoWidget();

        });



        ZOHO.embeddedApp.init();

      } else {

        console.warn(

          "Zoho Embedded App SDK not detected. Open this page inside a Zoho CRM widget to receive the Deal ID.",

        );

        setCrmStatus(

          "Standalone preview · Open inside Zoho CRM to receive the current Deal ID.",

        );

      }



      // Shipping rates are loaded dynamically from the Packlink PRO response.

      let currentRates = [];

      let activeFilter = "all";



      const $ = (id) => document.getElementById(id);

      function showToast(message, type) {

        const toast = $("toast");

        toast.textContent = message;

        toast.className = "toast" + (type === "error" ? " error" : "");

        toast.classList.remove("hidden");

        window.clearTimeout(showToast.timer);

        showToast.timer = window.setTimeout(

          () => toast.classList.add("hidden"),

          3200,

        );

      }

      function validPositive(id) {

        const el = $(id);

        const number = Number(el.value);

        if (!el.value.trim() || !Number.isFinite(number) || number <= 0) {

          el.focus();

          el.reportValidity && el.reportValidity();

          return false;

        }

        return true;

      }

      function validateShipment() {

        const textIds = [

          "fromName",

          "fromAddress",

          "fromCity",

          "fromPostcode",

          "toName",

          "toAddress",

          "toCity",

          "toPostcode",

        ];

        for (const id of textIds) {

          if (!$(id).value.trim()) {

            $(id).focus();

            showToast(

              "Please complete all required sender and recipient fields.",

              "error",

            );

            return false;

          }

        }

        for (const id of ["weight", "length", "width", "height"]) {

          if (!validPositive(id)) {

            showToast(

              "Weight and dimensions must be greater than zero.",

              "error",

            );

            return false;

          }

        }

        return true;

      }



      function escapeHtml(value) {

        return String(value == null ? "" : value)

          .replace(/&/g, "&amp;")

          .replace(/</g, "&lt;")

          .replace(/>/g, "&gt;")

          .replace(/"/g, "&quot;")

          .replace(/'/g, "&#39;");

      }



      function firstValue(obj, keys, fallback) {

        if (!obj || typeof obj !== "object") return fallback;

        for (const key of keys) {

          const value = obj[key];

          if (value !== undefined && value !== null && value !== "") return value;

        }

        return fallback;

      }



      function parseMaybeJson(value) {

        if (typeof value !== "string") return value;

        const trimmed = value.trim();

        if (!trimmed) return value;

        try { return JSON.parse(trimmed); } catch (_) { return value; }

      }



      function unwrapFunctionResponse(raw) {

        let value = parseMaybeJson(raw);

        // ZOHO.CRM.HTTP.post may wrap the Deluge string output.

        for (let i = 0; i < 4 && value && typeof value === "object"; i++) {

          if (value.details && value.details.output !== undefined) {

            value = parseMaybeJson(value.details.output);

            continue;

          }

          if (value.response !== undefined && Object.keys(value).length <= 5) {

            value = parseMaybeJson(value.response);

            continue;

          }

          if (value.output !== undefined && Object.keys(value).length <= 5) {

            value = parseMaybeJson(value.output);

            continue;

          }

          break;

        }

        return value;

      }



      function findServiceArray(data) {

        if (Array.isArray(data)) return data;

        if (!data || typeof data !== "object") return null;



        const preferredKeys = [

          "services", "data", "results", "items", "rates",

          "available_services", "availableServices", "shipping_services"

        ];

        for (const key of preferredKeys) {

          if (Array.isArray(data[key])) return data[key];

        }

        for (const value of Object.values(data)) {

          if (Array.isArray(value) && value.length &&

              value.some(item => item && typeof item === "object" &&

                ("base_price" in item || "price" in item || "carrier_name" in item ||

                 "service_name" in item || "transit_time" in item))) {

            return value;

          }

        }

        return null;

      }



      function normalizeService(raw, index) {

        const carrier = String(firstValue(raw, [

          "carrier_name", "carrier", "provider_name", "provider", "company"

        ], "Shipping carrier"));

        const serviceName = String(firstValue(raw, [

          "name", "service_name", "service", "product_name", "description"

        ], "Shipping service"));

        const rawPrice = firstValue(raw, ["base_price", "price", "total_price", "amount"], null);

        const numericPrice = Number(rawPrice);

        const currency = String(firstValue(raw, ["currency", "currency_code"], "GBP"));

        const transit = firstValue(raw, [

          "transit_time", "transitTime", "delivery_time", "deliveryTime",

          "estimated_delivery", "delivery_estimate"

        ], "Not provided");

        const lowerText = (carrier + " " + serviceName + " " +

          String(firstValue(raw, ["pickup_type", "dropoff_type", "delivery_type", "type"], "")))

          .toLowerCase();



        const isCollection = Boolean(firstValue(raw, [

          "collection", "pickup", "pickup_available", "collection_available"

        ], false)) || /collection|pickup|door.?to.?door/.test(lowerText);

        const isDropoff = Boolean(firstValue(raw, [

          "dropoff", "drop_off", "dropoff_available", "drop_off_available"

        ], false)) || /drop.?off|parcelshop|access point|locker/.test(lowerText);

        const homeDelivery = Boolean(firstValue(raw, [

          "home_delivery", "delivery_to_address", "door_delivery"

        ], false)) || /home delivery|door.?to.?door/.test(lowerText);



        const tags = [];

        if (isDropoff) tags.push("dropoff");

        if (isCollection) tags.push("collection");

        if (homeDelivery) tags.push("home");

        const transitNumber = Number(String(transit).match(/\d+(?:\\.\d+)?/)?.[0]);

        if (Number.isFinite(transitNumber) && transitNumber > 0 && transitNumber <= 48) tags.push("fast");



        const printerValue = firstValue(raw, [

          "printer_required", "requires_printer", "label_printer_required"

        ], null);

        const printer = printerValue === null

          ? "Printer requirement not specified"

          : (printerValue === true || String(printerValue).toLowerCase() === "true"

            ? "Printer required" : "No printer required");



        const compensation = firstValue(raw, [

          "compensation", "compensation_limit", "insurance", "cover"

        ], null);

        const cover = compensation == null

          ? "Compensation details not provided"

          : (typeof compensation === "object"

            ? JSON.stringify(compensation)

            : "Compensation: " + compensation);



        const fromText = isCollection ? "Courier collection" :

          (isDropoff ? "Drop-off point" : "Sender handover details not specified");

        const toText = homeDelivery ? "Home delivery" :

          (/pickup point|access point|parcelshop|locker/.test(lowerText)

            ? "Delivery to pick-up point" : "Delivery method not specified");



        return {

          id: String(firstValue(raw, ["id", "service_id", "serviceId", "code"], index + 1)),

          raw: raw,

          carrier: carrier,

          logo: carrier,

          logoClass: /ups/i.test(carrier) ? "ups" :

            (/evri/i.test(carrier) ? "evri" :

            (/dhl/i.test(carrier) ? "dhl" :

            (/fedex/i.test(carrier) ? "fedex" : ""))),

          service: serviceName,

          eta: transit,

          etaSort: Number.isFinite(transitNumber) ? transitNumber : 999999,

          price: Number.isFinite(numericPrice) ? numericPrice : null,

          currency: currency,

          from: fromText,

          to: toText,

          fromDesc: isCollection

            ? "The service indicates collection from the sender."

            : (isDropoff ? "The service indicates parcel drop-off." : "Check the service details returned by Packlink."),

          toDesc: homeDelivery

            ? "The service indicates delivery to the recipient's address."

            : "Check the service details returned by Packlink for the delivery method.",

          printer: printer,

          cover: cover,

          tags: tags,

          details: JSON.stringify(raw, null, 2)

        };

      }



      function showDetailsScreenError(message) {

        $("detailsScreen").classList.remove("hidden");

        $("ratesScreen").classList.add("hidden");

        showToast(message, "error");

      }



      // Replace the placeholder with a NEW CRM function API key after rotating the exposed key.

      // Keep in mind: a key embedded in frontend HTML is visible to users; use a server-side proxy/connection for production.

      // IMPORTANT: This is the Zoho EU data-center endpoint pattern from your working ShipStation widget.

      // Replace the placeholder with a NEW API key after revoking the exposed old key.

      const PACKLINK_CRM_FUNCTION_URL =  "https://www.zohoapis.eu/crm/v7/functions/packlinkpro_search_address/actions/execute?auth_type=apikey&zapikey=1003.3cee923177d72801544b9c98f2a86984.833b3aa1b5dbab8dbc65ed955b06c29f";



      function isNoRatesOrBadRequest(response) {
        if (response == null) return true;

        // Parse JSON text when the CRM function returns a serialized response.
        if (typeof response === "string") {
          const trimmed = response.trim();
          if (!trimmed) return true;
          try {
            response = JSON.parse(trimmed);
          } catch (error) {
            // Only a literal Bad Request response is treated as no rates.
            return /^bad request$/i.test(trimmed);
          }
        }

        // Empty service list means no rates.
        if (Array.isArray(response)) {
          if (response.length === 0) return true;
          // Only show the no-rates message if every returned item is an error.
          return response.every(item =>
            item && typeof item.message === "string" &&
            item.message.trim().toLowerCase() === "bad request"
          );
        }

        if (typeof response === "object") {
          // Exact Bad Request error object.
          if (typeof response.message === "string" &&
              response.message.trim().toLowerCase() === "bad request") return true;

          // Common API error wrappers: inspect nested output/details only.
          if (response.details && response.details.output !== undefined) {
            return isNoRatesOrBadRequest(response.details.output);
          }
          if (response.output !== undefined) return isNoRatesOrBadRequest(response.output);
          if (response.response !== undefined) return isNoRatesOrBadRequest(response.response);

          // Empty known service arrays mean no rates; non-empty arrays are valid.
          for (const key of ["services", "data", "results", "items", "rates", "available_services", "availableServices", "shipping_services"]) {
            if (Array.isArray(response[key])) return response[key].length === 0 || isNoRatesOrBadRequest(response[key]);
          }
        }
        return false;
      }

      function showNoShippingOptions() {
        currentRates = [];
        const list = $("rateList");
        const count = $("resultCount");
        if (count) count.textContent = "0 shipping services found";
        if (list) {
          list.innerHTML = '<div class="empty no-rates-empty"><h3>No shipping options available</h3><p>Packlink PRO did not return any shipping services for these shipment details. Please check the addresses, postcodes, weight and dimensions, then try again.</p><button type="button" id="retryNoRates">Try again</button></div>';
          const retry = $("retryNoRates");
          if (retry) retry.addEventListener("click", searchRates);
        }
        $("detailsScreen").classList.add("hidden");
        $("ratesScreen").classList.remove("hidden");
        $("step1").classList.remove("active");
        $("step1").classList.add("done");
        $("step1").querySelector(".step-num").textContent = "✓";
        $("step2").classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      async function searchRates() {

        if (!validateShipment()) return;



        if (!window.ZOHO || !ZOHO.CRM || !ZOHO.CRM.HTTP ||

            typeof ZOHO.CRM.HTTP.post !== "function") {

          showToast("Open this widget inside Zoho CRM to search live Packlink rates.", "error");

          return;

        }



        const btn = $("searchRatesBtn");

        const originalText = btn.textContent;

        btn.disabled = true;

        btn.textContent = "Searching Packlink PRO…";



        const shipment = {

          from_country: $("fromCountry").value,

          from_postcode: $("fromPostcode").value.trim(),

          to_country: $("toCountry").value,

          to_postcode: $("toPostcode").value.trim(),

          weight: Number($("weight").value),

          length: Number($("length").value),

          width: Number($("width").value),

          height: Number($("height").value),

          parcel_type: $("parcelType").value,

          from_name: $("fromName").value.trim(),

          from_address: $("fromAddress").value.trim(),

          from_city: $("fromCity").value.trim(),

          to_name: $("toName").value.trim(),

          to_address: $("toAddress").value.trim(),

          to_city: $("toCity").value.trim()

        };



        try {

          // Match the working ShipStation widget's CRM custom-function API pattern.

          // The Deluge function reads body -> arguments -> shipment_data.

          const request = {

            url: PACKLINK_CRM_FUNCTION_URL,

            headers: {

              "Content-Type": "application/json"

            },

            body: {

              arguments: JSON.stringify({

                shipment_data: JSON.stringify(shipment)

              })

            }

          };



          // ========== STEP 1: SHIPMENT PARAMETERS ==========

          console.log("========== STEP 1: SHIPMENT PARAMETERS ==========");

          console.log("Shipment object:", shipment);

          console.log("Shipment JSON:", JSON.stringify(shipment, null, 2));



          // ========== STEP 2: CRM REQUEST ==========

          console.log("========== STEP 2: CRM REQUEST ==========");

          console.log("Request URL:", request.url);

          console.log("Request headers:", request.headers);

          console.log("Complete request object:", request);



          // ========== STEP 3: REQUEST BODY ==========

          console.log("========== STEP 3: REQUEST BODY ==========");

          console.log("Request body:", request.body);

          console.log("Arguments value:", request.body.arguments);



          // ========== STEP 4: PARSED ARGUMENTS ==========

          console.log("========== STEP 4: PARSED ARGUMENTS ==========");



          const debugArguments = JSON.parse(request.body.arguments);



          console.log("Parsed arguments:", debugArguments);

          console.log("shipment_data value:", debugArguments.shipment_data);

          console.log(

              "Parsed shipment_data:",

              JSON.parse(debugArguments.shipment_data)

          );



          console.log("========== END OF REQUEST DEBUG ==========");



          const rawResponse = await ZOHO.CRM.HTTP.post(request);

          console.log("Packlink CRM function raw response:", rawResponse);



          const data = unwrapFunctionResponse(rawResponse);

          console.log("Packlink function output after unwrapping:", data);
          // Only show the no-rates state for an explicit Bad Request or an empty service list.
          // A valid non-empty array (for example Array(15)) continues to normal rendering.
          if (isNoRatesOrBadRequest(data)) {
            showNoShippingOptions();
            return;
          }




          // CRM API may return an error envelope even when the HTTP call resolves.

          if (data && typeof data === "object" &&

              (data.success === false || data.error || data.code === "error" ||

               data.status === "error" || data.code === "INVALID_DATA")) {

            const details = firstValue(data, ["message", "error", "details", "statusMessage"], "Packlink returned an error.");

            throw new Error(typeof details === "object" ? JSON.stringify(details) : String(details));

          }



          const services = findServiceArray(data);

          if (!services) {

            console.error("Unexpected Packlink response structure:", data);

            throw new Error("Packlink response received, but no services array was found. Check the console and the Deluge response.");

          }



          currentRates = services.map(normalizeService);

          if (!currentRates.length) {

            throw new Error("Packlink returned no shipping services for these shipment details.");

          }



          $("summaryLine").textContent =

            `${shipment.parcel_type} · ${shipment.from_city} → ${shipment.to_city} · ${shipment.weight} kg · ${shipment.length} × ${shipment.width} × ${shipment.height} cm`;

          $("summaryAddress").textContent =

            `${shipment.from_postcode}, ${shipment.from_country} → ${shipment.to_postcode}, ${shipment.to_country}`;



          $("detailsScreen").classList.add("hidden");

          $("ratesScreen").classList.remove("hidden");

          $("step1").classList.remove("active");

          $("step1").classList.add("done");

          $("step1").querySelector(".step-num").textContent = "✓";

          $("step2").classList.add("active");

          activeFilter = "all";

          document.querySelectorAll(".chip").forEach(button =>

            button.classList.toggle("selected", button.dataset.filter === "all")

          );

          renderRates();

          window.scrollTo({ top: 0, behavior: "smooth" });

        } catch (error) {

          console.error("Packlink rate search failed:", error);

          showToast(error && error.message ? error.message : "Unable to retrieve Packlink rates.", "error");

        } finally {

          btn.disabled = false;

          btn.textContent = originalText;

        }

      }



      function backToDetails() {

        $("ratesScreen").classList.add("hidden");

        $("detailsScreen").classList.remove("hidden");

        $("step1").classList.remove("done");

        $("step1").classList.add("active");

        $("step1").querySelector(".step-num").textContent = "1";

        $("step2").classList.remove("active");

        window.scrollTo({ top: 0, behavior: "smooth" });

      }



      function formatPrice(service) {

        if (service.price === null || !Number.isFinite(service.price)) return "Price unavailable";

        try {

          return new Intl.NumberFormat(undefined, {

            style: "currency",

            currency: service.currency || "GBP"

          }).format(service.price);

        } catch (_) {

          return `${service.currency || ""} ${service.price.toFixed(2)}`;

        }

      }



      function renderRates() {

        let list = [...currentRates];

        if (activeFilter === "dropoff") list = list.filter(s => s.tags.includes("dropoff"));

        else if (activeFilter === "collection") list = list.filter(s => s.tags.includes("collection"));

        else if (activeFilter === "home") list = list.filter(s => s.tags.includes("home"));

        else if (activeFilter === "fast") list = list.filter(s => s.tags.includes("fast"));



        const sort = $("sortRates").value;

        if (sort === "price") list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));

        if (sort === "fastest") list.sort((a, b) => a.etaSort - b.etaSort);

        $("resultCount").textContent = `${list.length} live service${list.length === 1 ? "" : "s"} found`;



        const root = $("rateList");

        if (!list.length) {

          root.innerHTML = '<div class="empty">No services match this filter. Try another option.</div>';

          return;

        }



        root.innerHTML = list.map((service, index) => {

          const safeId = "rate-" + index;

          const etaDisplay = escapeHtml(service.eta);

          const priceDisplay = escapeHtml(formatPrice(service));

          const details = escapeHtml(service.details);

          return `

            <article class="rate-card">

              <div class="rate-main">

                <div class="eta"><strong>${etaDisplay}</strong><span>TRANSIT<br>ESTIMATE</span></div>

                <div class="carrier">

                  <div class="carrier-logo ${escapeHtml(service.logoClass)}">${escapeHtml(service.logo)}</div>

                  <small>${escapeHtml(service.service)}</small>

                </div>

                <div class="service-block">

                  <div class="service-title">⌖ &nbsp;${escapeHtml(service.from.toUpperCase())}</div>

                  <div class="service-desc">${escapeHtml(service.fromDesc)}</div>

                </div>

                <div class="service-block">

                  <div class="service-title">⌂ &nbsp;${escapeHtml(service.to.toUpperCase())}</div>

                  <div class="service-desc">${escapeHtml(service.toDesc)}</div>

                </div>

                <div class="price">

                  <strong>${priceDisplay}</strong>

                  <button class="btn btn-primary select-service" data-index="${index}">Select service</button>

                </div>

              </div>

              <div class="rate-meta">

                <span>${escapeHtml(service.printer)}</span>

                <span>♢ &nbsp;${escapeHtml(service.cover)}</span>

                <span class="details-toggle" data-details="${safeId}">Details⌄</span>

              </div>

              <div class="rate-details hidden" id="rate-details-${safeId}">

                <strong>Packlink service response</strong><pre style="white-space:pre-wrap;overflow-wrap:anywhere;font:11px/1.5 inherit;margin:8px 0 0">${details}</pre>

              </div>

            </article>`;

        }).join("");



        root.querySelectorAll(".select-service").forEach(button => {

          button.addEventListener("click", () => {

            const visibleIndex = Number(button.dataset.index);

            const selected = list[visibleIndex];

            if (!selected) return;

            showToast(`${selected.carrier} — ${selected.service} selected. Shipment creation/checkout is not connected yet.`);

            console.log("Selected live Packlink service:", {

              crmDealId: crmDealId,

              serviceId: selected.id,

              carrier: selected.carrier,

              service: selected.service,

              price: selected.price,

              currency: selected.currency,

              rawService: selected.raw

            });

          });

        });



        root.querySelectorAll(".details-toggle").forEach(button => {

          button.addEventListener("click", () => {

            const details = $("rate-details-" + button.dataset.details);

            details.classList.toggle("hidden");

            button.textContent = details.classList.contains("hidden") ? "Details⌄" : "Hide details⌃";

          });

        });

      }



      $("searchRatesBtn").addEventListener("click", searchRates);

      $("editDetailsBtn").addEventListener("click", backToDetails);

      $("sortRates").addEventListener("change", renderRates);

      $("resetParcel").addEventListener("click", () => {

        $("weight").value = "12";

        $("length").value = "60";

        $("width").value = "40";

        $("height").value = "30";

        $("parcelType").value = "Rolled rug";

        showToast("Sample rug parcel dimensions restored.");

      });

      document.querySelectorAll(".chip").forEach((button) => {

        button.addEventListener("click", () => {

          activeFilter = button.dataset.filter;

          document

            .querySelectorAll(".chip")

            .forEach((item) =>

              item.classList.toggle("selected", item === button),

            );

          renderRates();

        });

      });

    </script>

  </body>

</html>
