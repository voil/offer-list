/**
 * Function helper to parse offer link
 * @param String companyName
 * @param String uniqueId
 */
export function hParseUrlOffer(companyName: string, titleOffer: string) {
  return `${encodeURIComponent(
    companyName.toLocaleLowerCase()
  )}-${encodeURIComponent(
    titleOffer
      .toLocaleLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^a-zA-Z0-9\- ]/g, "")
  )}`;
}
