import { render } from "./render";
import { CaseStudyPage } from "./case-studies/CaseStudyPage";
import { helpPages } from "./case-studies/help-pages";

render(<CaseStudyPage study={helpPages} />);
