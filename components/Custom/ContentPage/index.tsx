import {
  ContentPageMain,
  ContentPageInner,
} from "@/components/Custom/ContentPage/styles";
import HeaderPage from "@/components/Custom/HeaderPage";
import ToogleLayout from "@/components/ToogleLayout";

type ContentPage = {
  children: JSX.Element[] | JSX.Element;
};

/**
 * Content page.
 * Component for wrap content page.
 * @props ContentPage children
 */
export default function ContentPage({ children }: ContentPage) {
  return (
    <ContentPageMain>
      <HeaderPage />
      <ToogleLayout />
      <ContentPageInner>{children}</ContentPageInner>
    </ContentPageMain>
  );
}
