import React from 'react';
import Feature from './../../components/Feature/Feature';
import feature1 from "../../assets/feature-1.svg"
import feature2 from "../../assets/feature-2.svg"
import feature3 from "../../assets/feature-3.svg"
import feature4 from "../../assets/feature-4.svg"
import feature5 from "../../assets/feature-5.svg"

const Features = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-5 py-10">
            <Feature
                image={feature1}
                title="Best prices"
                description="Orders start from 100"
            />
            <Feature
                image={feature2}
                title="Fast delivery"
                description="24/7 amazing services"
            />
            <Feature
                image={feature3}
                title="Great deal"
                description="When you sign up"
            />
            <Feature
                image={feature4}
                title="Wide offers"
                description="Mega Discounts"
            />
            <Feature
                image={feature5}
                title="Easy returns"
                description="Within 30 days"
            />
        </section>
    );
};

export default Features;