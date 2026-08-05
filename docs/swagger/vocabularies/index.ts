// Controlled-vocabulary descriptors for the thesaurus section. One entry per
// vocabulary; the thesaurus generator turns each into a playground spec. Built
// from the archived thesaurus pages (one global page per vocabulary, ADR — the
// archive duplicated these per record type). Usages are recorded where the
// archive documented them.

export interface VocabularyUsage {
  title: string
  field: string
  recordType: string
}

export interface Vocabulary {
  slug: string
  name: string
  path: string
  overview: string
  usages: VocabularyUsage[]
}

export const vocabularies: Vocabulary[] = [
  {
    "slug": "abs-functions",
    "name": "Authority - ABS Functions",
    "path": "/api/v2013/thesaurus/domains/8102E184-E282-47F7-A49F-4C219B0EE235/terms",
    "overview": "This endpoint retrieves a list of functions related to Access and Benefit Sharing (ABS) under the Convention on Biological Diversity (CBD). These functions are essential for understanding and documenting the roles and responsibilities associated with ABS agreements and practices. This endpoint helps in accessing standardized terms that define various ABS functions, which can be utilized for compliance, reporting, and management purposes.",
    "usages": []
  },
  {
    "slug": "abs-genetic-resource-areas",
    "name": "Authority - ABS Genetic Resource Areas",
    "path": "/api/v2013/thesaurus/domains/545CD54C-CFF3-41E8-A003-FDD278426A3A/terms",
    "overview": "This endpoint provides access to a list of areas or regions where genetic resources relevant to Access and Benefit-Sharing (ABS) agreements are found. This endpoint retrieves terms that classify different geographic or administrative areas associated with ABS agreements, which are crucial for managing and tracking the utilization of genetic resources within specific regions.",
    "usages": []
  },
  {
    "slug": "abs-genetic-resource-types",
    "name": "Authority - ABS Genetic Resource Types",
    "path": "/api/v2013/thesaurus/domains/20945FA8-C24C-4AF6-B3D9-367592AFDF48/terms",
    "overview": "This endpoint provides access to a comprehensive list of genetic resource types relevant to Access and Benefit-Sharing (ABS) agreements. This endpoint retrieves terms that classify different types of genetic resources involved in ABS arrangements, which are essential for the effective management and compliance with international agreements regarding the use of genetic resources and traditional knowledge.",
    "usages": []
  },
  {
    "slug": "abs-jurisdictions",
    "name": "Authority - ABS Jurisdictions",
    "path": "/api/v2013/thesaurus/domains/51A113E9-071F-440A-83DC-E3499B7C646D/terms",
    "overview": "This endpoint provides access to a list of jurisdictions relevant to Access and Benefit-Sharing (ABS) agreements. This endpoint retrieves terms that describe different jurisdictions involved in ABS arrangements, which are crucial for ensuring compliance with international agreements and regulations related to the use of genetic resources and traditional knowledge. ABS jurisdictions help in identifying and managing the geographic and legal contexts in which ABS agreements are applied.",
    "usages": []
  },
  {
    "slug": "abs-measures",
    "name": "Measure - ABS Measures",
    "path": "/api/v2013/thesaurus/domains/50616B56-12F3-4C46-BC43-2DFC26679177/terms",
    "overview": "This endpoint provides access to a list of measures related to Access and Benefit-Sharing (ABS) within the context of the Convention on Biological Diversity (CBD). This endpoint allows users to retrieve standardized terms and definitions used to describe ABS measures, which are crucial for documenting and reporting on the management and utilization of genetic resources.",
    "usages": []
  },
  {
    "slug": "abs-subjects",
    "name": "ABS Subjects",
    "path": "/api/v2013/thesaurus/domains/CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924/terms",
    "overview": "This endpoint retrieves terms related to the Aichi Biodiversity Targets, which are a set of global biodiversity goals established under the Convention on Biological Diversity (CBD). These terms represent key targets, such as raising awareness of biodiversity values, aimed at guiding conservation efforts, sustainability practices, and policy-making. By accessing these terms, users can find detailed, standardized definitions to support awareness, reporting, and educational initiatives around biodiversity.",
    "usages": []
  },
  {
    "slug": "aichi-targets",
    "name": "Aichi Targets",
    "path": "/api/v2013/thesaurus/domains/AICHI-TARGETS/terms",
    "overview": "This endpoint retrieves terms related to the Aichi Biodiversity Targets, which are a set of global biodiversity goals established under the Convention on Biological Diversity (CBD). These terms represent key targets, such as raising awareness of biodiversity values, aimed at guiding conservation efforts, sustainability practices, and policy-making. By accessing these terms, users can find detailed, standardized definitions to support awareness, reporting, and educational initiatives around biodiversity.",
    "usages": []
  },
  {
    "slug": "all-keywords",
    "name": "All Keywords",
    "path": "/api/v2013/thesaurus/domains/CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924/terms",
    "overview": "This API endpoint provides terms and metadata related to \"Access to Genetic Resources\". The endpoint delivers detailed information about specific terms, their identifiers, multilingual titles, and their relationships to other terms. This is critical for managing compliance, legal frameworks, and the equitable sharing of benefits derived from genetic resources. It also supports multilingual data, aiding global collaboration and accessibility.",
    "usages": []
  },
  {
    "slug": "approved-status",
    "name": "Approving Status",
    "path": "/api/v2013/thesaurus/domains/E27760AB-4F87-4FBB-A8EA-927BDE375B48/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the E27760AB-4F87-4FBB-A8EA-927BDE375B48 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "approving-body",
    "name": "Approving Body",
    "path": "/api/v2013/thesaurus/domains/F1A5BFF1-F555-40D1-A24C-BBE1BE8E82BF/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the F1A5BFF1-F555-40D1-A24C-BBE1BE8E82BF domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "assessment-progress",
    "name": "Assessment Policy",
    "path": "/api/v2013/thesaurus/domains/EF99BEFD-5070-41C4-91F0-C051B338EEA6/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the EF99BEFD-5070-41C4-91F0-C051B338EEA6 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "bch-ra-author-affiliation",
    "name": "BCH RA Author Affiliation",
    "path": "/api/v2013/thesaurus/domains/Organization Types/terms",
    "overview": "This endpoint retrieves a list of organization types relevant to the Convention on Biological Diversity (CBD). The organization types provide standardized terms for identifying various categories of organizations involved in biodiversity and environmental research, policy, and advocacy. These terms help users classify and access information related to specific organizational roles in conservation, education, and sustainable use of biodiversity.",
    "usages": []
  },
  {
    "slug": "bch-ra-subjects",
    "name": "BCH RA Subjects",
    "path": "/api/v2013/thesaurus/domains/69B43BB5-693B-4ED9-8FE0-95895E144142/terms",
    "overview": "This endpoint provides a roadmap for risk assessment of living modified organisms (LMOs) relevant to the Convention on Biological Diversity (CBD). The terms retrieved by this endpoint outline key documents, guidelines, and frameworks used to evaluate and manage potential risks associated with LMOs. This information aids regulatory bodies, scientists, and policymakers in aligning their assessments with international standards for biosafety and biodiversity preservation.",
    "usages": []
  },
  {
    "slug": "binary-indicator",
    "name": "Binary Indicator",
    "path": "/api/v2013/thesaurus/domains/KMGBF-BINARY-INDICATORS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the KMGBF-BINARY-INDICATORS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "cbd-subjects",
    "name": "CBD Subjects",
    "path": "/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms",
    "overview": "This endpoint provides access to a list of terms related to the subjects under the Convention on Biological Diversity (CBD). This endpoint allows users to retrieve and explore various subject terms that are relevant to CBD-related activities, documents, and reporting. These subjects are used to categorize and describe the content related to biodiversity and conservation.",
    "usages": []
  },
  {
    "slug": "cbi-audience",
    "name": "CBI Audience",
    "path": "/api/v2013/thesaurus/domains/AFB155C4-93A6-402C-B812-CFC7488ED651/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the AFB155C4-93A6-402C-B812-CFC7488ED651 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "cbi-cats",
    "name": "CBI Cats",
    "path": "/api/v2013/thesaurus/domains/579F448B-ECA8-4258-B130-3EAA68056D1F/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 579F448B-ECA8-4258-B130-3EAA68056D1F domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "cbi-cpb-types",
    "name": "CBI CPB Types",
    "path": "/api/v2013/thesaurus/domains/5CA7AACE-CB79-4146-BF12-B3B1955AFF17/terms",
    "overview": "The Thesaurus Terms API enables retrieval of structured metadata for terms within specific thesaurus domains. The provided endpoint fetches data for the 5CA7AACE-CB79-4146-BF12-B3B1955AFF17 domain, offering multilingual information, hierarchical relationships, and detailed descriptions. This API is particularly useful for managing terminological data and supporting applications that rely on standardized vocabulary.",
    "usages": []
  },
  {
    "slug": "cbi-funding-src",
    "name": "CBI Funding Src",
    "path": "/api/v2013/thesaurus/domains/Capacity Building Project Funding Types/terms",
    "overview": "This API provides access to terms related to Capacity Building Project Funding Types. These terms include metadata, multilingual titles, and relationships for categorizing funding mechanisms such as Bilateral. It serves as a foundational resource for organizations and systems managing funding classifications and capacity-building projects.",
    "usages": []
  },
  {
    "slug": "cbi-status",
    "name": "CBI Status",
    "path": "/api/v2013/thesaurus/domains/4E7731C7-791E-46E9-A579-7272AF261FED/terms",
    "overview": "The Thesaurus Terms API provides structured data for thesaurus terms in specific domains. This endpoint retrieves terms under the domain 4E7731C7-791E-46E9-A579-7272AF261FED. Each term includes multilingual titles, descriptions, and metadata, making it useful for applications involving content categorization, multilingual support, or structured knowledge management",
    "usages": []
  },
  {
    "slug": "cbi-thematic-areas",
    "name": "CBI Thematic Areas",
    "path": "/api/v2013/thesaurus/domains/043C7F0D-2226-4E54-A56F-EE0B74CCC984/terms",
    "overview": "This API provides access to terms related to Biosafety Policy and Regulation. It includes multilingual titles, identifiers, and hierarchical relationships such as broader and narrower terms. The API is essential for systems managing biosafety knowledge, policies, and regulatory frameworks.",
    "usages": []
  },
  {
    "slug": "countries",
    "name": "General - Countries",
    "path": "/api/v2013/thesaurus/domains/countries/terms",
    "overview": "This endpoint provides access to a list of country terms from the thesaurus. This endpoint is part of the API for querying and retrieving terms related to countries, which can be used in various applications such as form fields, dropdowns, or data validation. It returns a comprehensive list of country names and related information as defined in the thesaurus.",
    "usages": [
      {
        "title": "Country",
        "field": "government",
        "recordType": "IRCC"
      },
      {
        "title": "Country",
        "field": "government",
        "recordType": "Contact"
      },
      {
        "title": "Country",
        "field": "country",
        "recordType": "NFP"
      },
      {
        "title": "Country",
        "field": "government",
        "recordType": "MSR"
      }
    ]
  },
  {
    "slug": "cp-jurisdiction",
    "name": "Checkpoint - CP Jurisdiction",
    "path": "/api/v2013/thesaurus/domains/D7BD5BDE-A6B9-4261-B788-16839CCC4F7E/terms",
    "overview": "This endpoint allows you to retrieve a list of terms associated with a specific jurisdiction within the thesaurus. This endpoint is useful for accessing jurisdiction-related terms identified by a unique domain identifier. It provides information about various jurisdictions, enabling applications to fetch and display relevant jurisdictional data.",
    "usages": []
  },
  {
    "slug": "cpb-functions",
    "name": "Authority - CBP Functions",
    "path": "/api/v2013/thesaurus/domains/Subject Areas/terms",
    "overview": "This endpoint provides access to a list of functions or roles related to the Convention on Biological Diversity (CBD) protocols and their implementation. This endpoint retrieves terms that classify different functions or responsibilities within the CBD framework, essential for understanding and managing various aspects of the Convention's application.",
    "usages": []
  },
  {
    "slug": "cpb-organism-types",
    "name": "Authority - CPB Organism Types",
    "path": "/api/v2013/thesaurus/domains/TypeOfOrganisms/terms",
    "overview": "This endpoint provides a list of organism types categorized under the Convention on Biological Diversity's (CBD). This endpoint is essential for retrieving standardized terms related to different types of organisms as defined in the context of biosafety and biodiversity management.",
    "usages": []
  },
  {
    "slug": "cpb-thematic-areas",
    "name": "CPB Thematic Areas",
    "path": "/api/v2013/thesaurus/domains/043C7F0D-2226-4E54-A56F-EE0B74CCC984/terms",
    "overview": "This endpoint retrieves a list of terms associated with biosafety policy and regulation under the Convention on Biological Diversity (CBD). These terms are essential for understanding global policies and regulatory frameworks related to biosafety in biotechnology, which ensure the safe use and management of biological technology applications. This data supports the documentation and analysis of biosafety measures worldwide, aiding in compliance, policy development, and risk prevention.",
    "usages": []
  },
  {
    "slug": "cpc-keywords",
    "name": "Checkpoint Communique - CPC Keywords",
    "path": "/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms",
    "overview": "This endpoint provides access to a list of terms associated with a specific domain within the thesaurus. This endpoint is designed to retrieve terms relevant to the CPC (Checkpoint Communique) Keywords domain. It helps users fetch and utilize keywords associated with communicative checkpoints in the context of the specified domain.",
    "usages": []
  },
  {
    "slug": "decision-lmo-ffp-subject",
    "name": "Biosafety Decision - Decision LMO FFP Subject",
    "path": "/api/v2013/thesaurus/domains/DecisionLMOFFPSubject/terms",
    "overview": "This endpoint retrieves terms specifically related to LMOs (Living Modified Organisms) that are intended for direct use as food. It provides multilingual titles to facilitate understanding across different language speakers. The data aims to support stakeholders involved in food safety, regulatory compliance, and biodiversity management by providing clear and accessible terminology related to the use of genetically modified organisms in food production.",
    "usages": []
  },
  {
    "slug": "decision-results",
    "name": "Biosafety Decision - Decision Results",
    "path": "/api/v2013/thesaurus/domains/DecisionResults/terms",
    "overview": "This endpoint provides access to terms related to the approval of Living Modified Organisms (LMOs) for import and/or use without conditions.",
    "usages": []
  },
  {
    "slug": "decision-types",
    "name": "Biosafety Decision - Decision Types",
    "path": "/api/v2013/thesaurus/domains/DecisionTypes/terms",
    "overview": "This endpoint retrieves decision-related terms specific to the intentional introduction of LMOs (Living Modified Organisms) into the environment. The endpoint provides multilingual descriptions, broadening access for international users and stakeholders. Terms include titles, descriptions for experimental and commercial introductions, and context for regulatory compliance. Detailed information on broader and narrower decision types supports categorization within different regulatory and environmental frameworks.",
    "usages": []
  },
  {
    "slug": "dna-sequence-family",
    "name": "DNA Sequence - DNA Sequence Family",
    "path": "/api/v2013/thesaurus/domains/82DAAF04-6698-4CA6-81D5-F200AE64C63A/terms",
    "overview": "This endpoint provides access to terms related to Protein Coding Sequences within genetic data. These sequences are key genetic elements that carry instructions for synthesizing proteins, essential for biological functions. Specific terms in this domain cover sequences like genes or complementary DNA (cDNA), which are fundamental in fields like genetic engineering, molecular biology, and biotechnology.",
    "usages": []
  },
  {
    "slug": "document-links-ext",
    "name": "Measure - Document Links Ext",
    "path": "/api/v2013/thesaurus/domains/ISO639-2/terms",
    "overview": "This endpoint is used to retrieve information about language codes that can be used in the context of documents and measures within the Convention on Biological Diversity (CBD). It helps in associating documents with specific languages, ensuring proper localization and accessibility.",
    "usages": []
  },
  {
    "slug": "gbf-complementary-indicators",
    "name": "GBF Complementary Indicators",
    "path": "/api/v2013/thesaurus/domains/GBF-COMPLEMENTARY-INDICATORS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-COMPLEMENTARY-INDICATORS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "gbf-component-indicators",
    "name": "GBF Component Indicators",
    "path": "/api/v2013/thesaurus/domains/GBF-COMPONENT-INDICATORS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-COMPONENT-INDICATORS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "gbf-degree-of-alignment",
    "name": "GBF Degree of Alignment",
    "path": "/api/v2013/thesaurus/domains/GBF-DEGREE-OF-ALIGNMENT/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-DEGREE-OF-ALIGNMENT domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "gbf-goals",
    "name": "GBF Goals",
    "path": "/api/v2013/thesaurus/domains/GBF-GOALS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-GOALS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "gbf-headline-indicators",
    "name": "GBF Headline Indicators",
    "path": "/api/v2013/thesaurus/domains/GBF-HEADLINE-INDICATORS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-HEADLINE-INDICATORS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "gbf-target-considerations",
    "name": "GBF Target Considerations",
    "path": "/api/v2013/thesaurus/domains/GBF-TARGETS-CONSIDERATIONS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-TARGETS-CONSIDERATIONS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "gbf-targets",
    "name": "GBF Targets",
    "path": "/api/v2013/thesaurus/domains/GBF-TARGETS/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-TARGETS domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "jurisdictions",
    "name": "Jurisdictions",
    "path": "/api/v2013/thesaurus/domains/D7BD5BDE-A6B9-4261-B788-16839CCC4F7E/terms",
    "overview": "This endpoint provides access to a list of jurisdictional terms used in the context of authority and governance. This endpoint retrieves terms related to various jurisdictions, which are essential for defining and categorizing different areas of legal and administrative authority. Jurisdictions can represent geographic regions, governmental units, or administrative divisions relevant to legal and policy frameworks.",
    "usages": []
  },
  {
    "slug": "key-areas",
    "name": "Key Areas",
    "path": "/api/v2013/thesaurus/domains/2B2A5166-F949-4B1E-888F-A7976E76320B/terms",
    "overview": "This endpoint provides access to key areas of capacity building related to implementing and complying with the obligations of international biodiversity protocols. These key areas outline the specific capabilities necessary for countries and organizations to meet protocol requirements, promoting consistent and effective policy enforcement globally. This endpoint supports entities working on protocol compliance by providing a structured list of terms, enhancing transparency and accessibility in international biodiversity and environmental commitments.",
    "usages": []
  },
  {
    "slug": "keywords",
    "name": "Authority - Keywords",
    "path": "/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms",
    "overview": "This endpoint provides access to a list of standardized keywords used within the context of authority-related functions. These keywords are essential for categorizing and describing various aspects related to the management and documentation of authority functions under the Convention on Biological Diversity (CBD). This endpoint helps in obtaining a controlled vocabulary of keywords that can be used for reporting, data management, and compliance purposes.",
    "usages": []
  },
  {
    "slug": "languages",
    "name": "Measure - Languages",
    "path": "/api/v2013/thesaurus/domains/52AFC0EE-7A02-4EFA-9277-8B6C327CE21F/terms",
    "overview": "This endpoint provides access to a list of languages used for describing measurements and data within the context of the Convention on Biological Diversity (CBD). This endpoint helps users retrieve a standardized list of language codes and names that are relevant for measurement-related data and documentation. It is essential for ensuring that measurement data is consistently described and categorized across different systems and applications.",
    "usages": []
  },
  {
    "slug": "law-jurisdictions",
    "name": "Biosafety Law - Law Jurisdictions",
    "path": "/api/v2013/thesaurus/domains/5001DC0F-908A-4983-8962-EBF4FC18F245/terms",
    "overview": "This endpoint provides access to a list of terms from the thesaurus related to regional and multilateral topics. It enables users to retrieve structured information on various aspects of regional or multilateral agreements, policies, or frameworks. Each term includes multilingual titles, identifiers, and relevant metadata, facilitating applications in areas such as international policy, cooperation, and data classification.",
    "usages": []
  },
  {
    "slug": "legislation-agreement-types",
    "name": "Biosafety Law - Legislation Agreement Types",
    "path": "/api/v2013/thesaurus/domains/Legislation And Agreement Types/terms",
    "overview": "This endpoint provides access to a curated list of terms related to various types of legislation and agreements as defined in the thesaurus. It allows users to retrieve structured information, including multilingual titles and metadata, on legal and agreement terms such as \"Law.\" This can support applications in areas involving legal reference, regulatory compliance, or international agreements, enhancing accessibility to a wide range of legislative terminologies.",
    "usages": []
  },
  {
    "slug": "libraries",
    "name": "General - Libraries",
    "path": "/api/v2013/thesaurus/domains/cbdClearingHouses/terms",
    "overview": "This endpoint allows you to retrieve a list of terms related to CBD clearing houses from the thesaurus. This API endpoint is part of the system that provides standardized terminology used across various applications and systems. It is useful for applications that need to reference or display terms associated with CBD clearing houses in a consistent manner.",
    "usages": []
  },
  {
    "slug": "mcc-keywords",
    "name": "MCC Keywords",
    "path": "/api/v2013/thesaurus/domains/ABS-A1920-Keywords/terms",
    "overview": "This API endpoint provides terms and metadata related to \"Access to Genetic Resources\". The endpoint delivers detailed information about specific terms, their identifiers, multilingual titles, and their relationships to other terms. This is critical for managing compliance, legal frameworks, and the equitable sharing of benefits derived from genetic resources. It also supports multilingual data, aiding global collaboration and accessibility.",
    "usages": []
  },
  {
    "slug": "msr-jurisdictions",
    "name": "Measure - Jurisdictions",
    "path": "/api/v2013/thesaurus/domains/7A56954F-7430-4B8B-B733-54B8A5E7FF40/terms",
    "overview": "This endpoint provides access to a list of jurisdictions relevant to the Convention on Biological Diversity (CBD). This endpoint is intended to help users retrieve a comprehensive list of geographic and administrative jurisdictions that are associated with measures and policies related to biodiversity and genetic resources. The endpoint supports the standardization of jurisdictional data for better reporting, compliance, and data management.",
    "usages": [
      {
        "title": "Area of jurisdiction",
        "field": "jurisdiction",
        "recordType": "MSR"
      }
    ]
  },
  {
    "slug": "organism-common-uses",
    "name": "Modified Organism - Organism Common Uses",
    "path": "/api/v2013/thesaurus/domains/OrganismCommonUses/terms",
    "overview": "This endpoint provides access to a list of common uses of organisms, as defined in the thesaurus. It enables retrieval of terms related to various applications of organisms, such as biocontrol. These terms can be used in fields like environmental research, agricultural planning, and data categorization. The endpoint returns a structured list including identifiers, names, and multilingual titles for consistent reference and integration into various applications.",
    "usages": []
  },
  {
    "slug": "organization-types",
    "name": "Organization Types",
    "path": "/api/v2013/thesaurus/domains/Organization%20Types/terms",
    "overview": "This endpoint provides a list of terms related to different types of organizations. This endpoint allows users to retrieve a comprehensive set of terms that classify and categorize various organizations based on their type. This information can be used for data classification, filtering, and integration tasks where understanding the types of organizations is necessary.",
    "usages": []
  },
  {
    "slug": "ort-jurisdictions",
    "name": "ORT Jurisdictions",
    "path": "/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 50AC1489-92B8-4D99-965A-AAE97A80F38E domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "other",
    "name": "General - Other",
    "path": "/api/v2013/thesaurus/terms/5B6177DD-5E5E-434E-8CB7-D63D67D5EBED",
    "overview": "This endpoint provides access to specific terms within the thesaurus using a unique identifier. This endpoint is designed to retrieve detailed information about a particular term identified by its UUID (Universally Unique Identifier). It is particularly useful for fetching specific term details when the exact term is known and needs to be accessed or displayed in your application.",
    "usages": []
  },
  {
    "slug": "permit-keywords",
    "name": "Permit - Permit Keywords (Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent)",
    "path": "/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms",
    "overview": "This endpoint provides access to a list of terms relevant to describing the subject-matter or genetic resources covered by a permit or its equivalent. This endpoint is useful for retrieving keywords that categorize and detail the scope of the permit, including the genetic resources or subject-matter it pertains to. The keywords can be used to annotate or classify permits, facilitating better management and retrieval of permit-related data.",
    "usages": [
      {
        "title": "Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent",
        "field": "keywords",
        "recordType": "IRCC - create"
      }
    ]
  },
  {
    "slug": "permit-usage",
    "name": "Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)",
    "path": "/api/v2013/thesaurus/domains/A7B77788-8C90-4849-9327-E181E9522F3A/terms",
    "overview": "This endpoint allows you to retrieve terms that specify whether a permit or its equivalent covers commercial and/or non-commercial use. This endpoint is useful for identifying the scope of usage rights associated with a permit, including whether it permits commercial activities, non-commercial activities, or both. The data obtained can help in understanding and managing the terms of use for various permits and ensuring compliance with their conditions.",
    "usages": [
      {
        "title": "Indicate if the permit or its equivalent covers commercial and/or non-commercial use",
        "field": "keywords &nbsp; &nbsp;",
        "recordType": "IRCC - create"
      }
    ]
  },
  {
    "slug": "policy-instruments",
    "name": "Policy Instruments",
    "path": "/api/v2013/thesaurus/domains/35772D10-DB54-4BF8-954E-F685A05F7FEA/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 35772D10-DB54-4BF8-954E-F685A05F7FEA domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "regions",
    "name": "General - Regions",
    "path": "/api/v2013/thesaurus/domains/regions/terms",
    "overview": "This endpoint provides access to a standardized list of geographic regions as defined in the thesaurus. This endpoint is part of the system used to ensure consistent terminology for geographic regions across various applications and services. It is particularly useful for applications that need to reference or display geographic regions in a standardized manner, such as for geographical data analysis, reporting, or selection in forms.",
    "usages": []
  },
  {
    "slug": "report-status",
    "name": "Report Status",
    "path": "/api/v2013/thesaurus/domains/7F0D898A-6BF1-4CE6-AA77-7FEAED3429C6/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 7F0D898A-6BF1-4CE6-AA77-7FEAED3429C6 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "resource-type-vlr",
    "name": "Resource Type VLR",
    "path": "/api/v2013/thesaurus/domains/A762DF7E-B8D1-40D6-9DAC-D25E48C65528/terms",
    "overview": "This endpoint provides access to a collection of standardized resource types within the Virtual Resource Library under the Convention on Biological Diversity (CBD). These resource types encompass various categories of library resources that support research, compliance, and knowledge-sharing related to biodiversity. By accessing these terms, users can retrieve structured information about resource categories, which can aid in consistent documentation and retrieval of biodiversity-related data.",
    "usages": []
  },
  {
    "slug": "risk-assessment-scope",
    "name": "Independent Risk Assessment - Risk Assessment Scope",
    "path": "/api/v2013/thesaurus/domains/RiskAssessmentScope/terms",
    "overview": "This endpoint provides access to terms related to the Risk Assessment Scope for Living Modified Organisms (LMOs). Specifically, it includes terms that outline the categories of LMOs, such as those intended for introduction into the environment. These terms support regulatory and scientific assessments by providing standardized definitions and classifications, which help clarify the scope of potential environmental impacts associated with the release of LMOs.",
    "usages": []
  },
  {
    "slug": "stakeholders",
    "name": "Stakeholders",
    "path": "/api/v2013/thesaurus/domains/5C948D98-B7CC-4755-A767-3A4B9607DE52/terms",
    "overview": "The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 5C948D98-B7CC-4755-A767-3A4B9607DE52 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.",
    "usages": []
  },
  {
    "slug": "statuses",
    "name": "Measure - Statuses",
    "path": "/api/v2013/thesaurus/domains/ED7CDBD8-7762-4A84-82DD-30C01458A799/terms",
    "overview": "This endpoint provides access to a list of statuses relevant to measures and policies related to the Convention on Biological Diversity (CBD). This endpoint is used to retrieve the various statuses that can be associated with measures or actions in the context of biodiversity management and conservation. These statuses help in tracking and reporting the progress, implementation, and effectiveness of measures.",
    "usages": [
      {
        "title": "Legal status of the measure",
        "field": "status",
        "recordType": "MSR"
      }
    ]
  },
  {
    "slug": "subject-areas",
    "name": "Biosafety Law - Subject Areas",
    "path": "/api/v2013/thesaurus/domains/Subject Areas/terms",
    "overview": "This endpoint provides access to a range of terms related to various subject areas. It enables users to retrieve organized information on subject-specific terms and narrower classifications, making it useful for applications that require structured access to biosafety functions, regulatory categories, and relevant terms in multilingual formats.",
    "usages": []
  },
  {
    "slug": "technique-used",
    "name": "Modified Organism - Technique Used",
    "path": "/api/v2013/thesaurus/domains/ABE9DCE3-92BA-4D5D-8948-7F7E541EEC6B/terms",
    "overview": "This endpoint allows access to a list of terms related to techniques used for modified organisms, as defined in the thesaurus. It is part of the API for querying and retrieving technical terms, which can be applied in fields such as scientific research, data categorization, or dropdown selections. The endpoint returns a structured list of technique names, identifiers, and multilingual titles, useful for accurate terminology referencing and application.",
    "usages": []
  },
  {
    "slug": "thematic-areas",
    "name": "Thematic Areas",
    "path": "/api/v2013/thesaurus/domains/CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924/terms",
    "overview": "The Thesaurus Terms API allows users to fetch information related to terms within the thesaurus domain. Specifically, the provided endpoint retrieves terms for CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924, offering metadata such as multilingual titles, hierarchical relationships (broader and narrower terms), and unique identifiers. This API is essential for referencing structured data and managing terminologies across systems.",
    "usages": []
  },
  {
    "slug": "transboundary-movement-types",
    "name": "Biosafety Decision - Transboundary Movement Types",
    "path": "/api/v2013/thesaurus/domains/TransboundaryMovementTypes/terms",
    "overview": "This endpoint is designed to retrieve terms associated with transboundary movements of Living Modified Organisms (LMOs).Understanding this term is crucial for stakeholders involved in the international movement of LMOs, including regulatory bodies, environmental organizations, and companies engaged in biotechnology. The endpoint ensures that users can access standardized definitions and legal references, which can aid in compliance and risk management related to the transboundary movement of LMOs.",
    "usages": []
  },
  {
    "slug": "translation-type",
    "name": "Measure - Translation Type",
    "path": "/api/v2013/thesaurus/domains/19E3C535-2919-4804-966C-E62728507291/terms",
    "overview": "This endpoint provides access to a list of terms related to different types of translations. This endpoint is used to retrieve information about various translation types that can be associated with documents and measures within the Convention on Biological Diversity (CBD). It helps in classifying and categorizing translations based on their type, ensuring proper documentation and management of translated materials.",
    "usages": []
  },
  {
    "slug": "type-of-documents",
    "name": "Measure - Type of Documents",
    "path": "/api/v2013/thesaurus/domains/144CF550-7629-43F3-817E-CACDED34837E/terms",
    "overview": "This endpoint provides access to a list of standardized types of documents used within the context of the Convention on Biological Diversity (CBD). This endpoint is designed to help users retrieve a comprehensive list of document types that are relevant for documenting and reporting various activities and measures related to biodiversity and genetic resources.",
    "usages": [
      {
        "title": "Type of document/measure",
        "field": "type",
        "recordType": "MSR"
      }
    ]
  },
  {
    "slug": "type-of-organisms",
    "name": "Biosafety Law - Type of Organisms",
    "path": "/api/v2013/thesaurus/domains/TypeOfOrganisms/terms",
    "overview": "This endpoint allows retrieval of terms associated with different types of organisms, providing details on organism groups like Animals, Plants, and Microorganisms. It supports multilingual output for titles and descriptions, allowing users to access organism classification, broader and narrower terms, and descriptions in multiple languages.",
    "usages": []
  }
]

export const vocabularyBySlug = (slug: string) =>
  vocabularies.find((v) => v.slug === slug)
