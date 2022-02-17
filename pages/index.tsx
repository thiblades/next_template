import { SafeBox, SEO } from "@components";
import Layout from "@layout/Layout";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("footer");
  return (
    <>
      <Layout>
        <SEO />
        <SafeBox>
            <img src='/assets/box.png' style={{width: 100, height: 100, marginBottom:100}} /> 
            <p>{t("common:welcome", { name: "Matthieu" })}</p>
            <p>{t("about:name")}</p>
         
        </SafeBox>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context?.locale === undefined ? "" : context.locale,
        ["common", "about"],
      )),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
