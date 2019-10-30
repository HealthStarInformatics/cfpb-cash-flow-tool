import React from "react";
import headerImage from "../../assets/strategies-header-img.png";
import "../../styles/StrategyView.scss";
import PrivacyNotice from "../shared/PrivacyNotice";
import SectionTip from "../SectionTip";
import { Divider } from "../shared/Divider";
import SiteFooter from "../shared/SiteFooter";
import { ViewHeader } from "../ViewHeader";
import { StrategyCard } from "./StrategyCard";

export const StrategyView = () => (
  <div className="view strategies">
    <ViewHeader
      image={headerImage}
      imageAltText="Calendar and iPad"
      title="Here are some strategies to help you save."
    />
    <SectionTip text="You can use the calendar as a way to test out these strategies.  As you update the calendar, your strategies may change" />
    <div className="strategies list">
      <StrategyCard {...strategy1} />
      <StrategyCard {...strategy3} />
    </div>
    <button className="primary">Save these strategies</button>
    <Divider color="dark" />
    <PrivacyNotice />
    <SiteFooter />
  </div>
);

const strategy1 = {
  heading: "Strategy 1",
  title: "Break up large mortgage or rent payments into smaller payments.",
  description:
    "You have a large mortgage or rent payment of $2,000. Contact your landlord or lender and ask if you can pay in bi-weekly installments.  This could free up more money toward the end of the month.",
  action: {
    text:
      "Test this strategy out by returning to the calendar. See how breaking up your payment would affect your total cash on hand"
  }
};

const strategy3 = {
  heading: "Strategy 3",
  title:
    "Brainstorm ways to save money. Then track your success from week to week.",
  description:
    "Your current available cash on hand is -$150.00, which means you spent more than you've earned. Don't worry, small changes can make a big difference.",
  action: {
    text:
      "Review your expenses and identify areas to reduce spending.  Ask yourself:",
    questions: [
      "Can you avoid late fees or credit card interest payments by moving around your bill due dates?",
      "Do you pay fees to access your money-for example, from ATMs or check-cashing services? Can you open a no-fee bank account?",
      "Can you set your thermostat lower during Winter and higher during Summer?",
      "Do you have memberships you're not using that you can cancel (magazine subscriptions, movie-streaming services, fitness classes)?"
    ],
    finalThought:
      "What other ideas do you have? Be sure to track your savings success from week to week."
  }
};
