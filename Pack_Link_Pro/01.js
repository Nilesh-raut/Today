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
      <span class="status">DEMO MODE · NO API CALLS</span>
    </header>
    <main>
      <div class="intro">
        <div>
          <div class="eyebrow">Thoughtful shipping for beautiful things</div>
          <h1>Create a new shipment</h1>
          <p>
            From your showroom to their doorstep — compare sample delivery
            options for rugs and home textiles.
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
            Enter the sender, recipient and parcel information to see sample
            rates.
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
        <div class="results-he
