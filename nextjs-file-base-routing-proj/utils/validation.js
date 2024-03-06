export function isEmailValid(data) {
  const extenstion = [".com", ".org", ".edu"];
  const providers = ["yahoo", "gmail", "outlook"];

  if (!data || data.length === 0) return false;

  for (let i = 0; i < extenstion.length; i++) {
    if (
      data.includes(providers[i]) &&
      data.includes(extenstion[i]) &&
      data.includes("@")
    ) {
      return true;
    }
  }
}
