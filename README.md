# Simple offer job list site

##### Start dev
##
```typescript
yarn dev
```

##### Start tests
##
```typescript
yarn tests
```

##### Set url to api .env file.
##
```typescript
URL_OFFER_LIST_API=%url_api%
```

##### Type offer object to must retrurn from api to display list "OfferType[]": 

##
##
```typescript
/**
 * OfferType.
 * Type for offer object.
 */
export type OfferType = {
  id: string;
  city: string;
  title: string;
  street: string;
  remote: boolean;
  latitude: number;
  longitude: number;
  salary_to: number;
  marker_icon: string;
  company_url: string;
  salary_from: number;
  country_code: string;
  published_at: string;
  company_name: string;
  company_size: string;
  salary_currency: string;
  employment_type: string;
  experience_level: string;
  company_logo_url: string;
  skills: Array<{ name: string; level: number }>;
};
```