import React, { useMemo, useState } from "react";
import { Tabs, Collapse, Input, Empty } from "antd";
import {
  DollarOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "../styles/faqs.css";

const { Panel } = Collapse;

// === EXACT questions & answers (unchanged) ===
const DATA = {
  pricing: [
    {
      key: "q1",
      q: "Can I purchase CyberPower products directly from Bluechip?",
      a: `Yes. Bluechip IT is an authorised CyberPower distributor in Australia and New Zealand. Purchase genuine UPS units via our sales team or Bluechip Portal, with full warranty and local support. Not a partner yet? Register your interest here.`,
    },
    {
      key: "q2",
      q: "How can I view CyberPower product pricing?",
      a: `View pricing via Bluechip Portal or contact our sales team for personalised quotes, including bulk orders. 
Once you’re a Bluechip reseller, you can log in to our partner portal to access the full CyberPower Hero Products, including BRICs LCD, Professional Rackmount, RT33 (3-Phase), PFC Sinewave, Online, and Remote Management Card — with complete product listings and pricing. 
For pricing questions, quotes, or bulk order support, contact our sales team or reach out to your local Bluechip representative.`,
    },
  ],
  stock: [
    {
      key: "q3",
      q: "How do I check which CyberPower products are in stock?",
      a: `Check real-time stock on Bluechip Portal, with fortnightly shipments keeping popular and specialised models available. 
Once you’re a Bluechip partner, you can log in to our reseller portal to browse the full CyberPower catalogue. 
If you can’t find what you’re looking for or have questions about stock availability, feel free to contact our team or reach out to your local Bluechip representative.`,
    },
    {
      key: "q4",
      q: "Does Bluechip stock all CyberPower products?",
      a: `Yes. We carry CyberPower Hero Products, from office UPS units to enterprise rackmount solutions and PDUs. Ready to become a Bluechip partner? Click here.`,
    },
  ],
  support: [
    {
      key: "q5",
      q: "What warranty and support can I expect from Bluechip?",
      a: `All products come with manufacturer warranty and many models include advanced replacement. Local support is available for installation, configuration, and troubleshooting. Start your partnership with Bluechip. To sign up, click here.`,
    },
  ],
};

export default function Faqs() {
  const [activeTab, setActiveTab] = useState("pricing");
  const [query, setQuery] = useState("");

  // Flatten everything once
  const ALL_ITEMS = useMemo(
    () => [...DATA.pricing, ...DATA.stock, ...DATA.support],
    []
  );

  const filterItems = (arr) =>
    arr.filter(
      ({ q, a }) =>
        q.toLowerCase().includes(query.toLowerCase()) ||
        a.toLowerCase().includes(query.toLowerCase())
    );

  const renderCollapse = (arr) => (
    <Collapse
      accordion
      bordered={false}
      className="faq__collapse"
      expandIconPosition="end"
    >
      {arr.map(({ key, q, a }) => (
        <Panel header={q} key={key}>
          <p className="faq__answer">{a}</p>
        </Panel>
      ))}
    </Collapse>
  );

  const tabItems = [
    {
      key: "pricing",
      label: (
        <span>
          <DollarOutlined /> Pricing & Purchasing
        </span>
      ),
      children: renderCollapse(filterItems(DATA.pricing)),
    },
    {
      key: "stock",
      label: (
        <span>
          <AppstoreOutlined /> Stock & Availability
        </span>
      ),
      children: renderCollapse(filterItems(DATA.stock)),
    },
    {
      key: "support",
      label: (
        <span>
          <SafetyCertificateOutlined /> Warranty & Support
        </span>
      ),
      children: renderCollapse(filterItems(DATA.support)),
    },
  ];

  // Global search block (independent of tabs)
  const globalMatches = filterItems(ALL_ITEMS);
  const showGlobal = query.trim().length > 0;

  return (
    <section className="faq">
      <div className="faq__wrap">
        <header className="faq__head">
          <span className="faq__kicker">FAQs</span>
          <h2>
            Frequently Asked  <span>Questions</span>
          </h2>
          <p>Browse by topic or search across all answers.</p>

          <div className="faq__search">
            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Search all questions…"
              allowClear
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        {showGlobal && (
          <div className="faq__results">
            <div className="faq__results-head">
              <strong>Search results</strong>
              <span>{globalMatches.length} match{globalMatches.length === 1 ? "" : "es"}</span>
            </div>
            {globalMatches.length ? (
              renderCollapse(globalMatches)
            ) : (
              <div className="faq__empty">
                <Empty description="No matches found" />
              </div>
            )}
          </div>
        )}

        <Tabs
          items={tabItems}
          activeKey={activeTab}
          onChange={setActiveTab}
          className="faq__tabs"
          destroyInactiveTabPane={false}
        />
      </div>
    </section>
  );
}
