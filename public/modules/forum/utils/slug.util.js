import { randomUUID } from "node:crypto";
/**
 * Generate a URL-friendly slug from a title string.
 *
 * Algorithm:
 * 1. Lowercase the input
 * 2. Replace all non-alphanumeric characters with hyphens
 * 3. Collapse consecutive hyphens into one
 * 4. Trim leading/trailing hyphens
 * 5. Truncate to 80 chars max (to keep URLs reasonable)
 * 6. Append an 8-char random suffix for uniqueness
 *
 * @example generateSlug("How to feed cattle in winter?")
 *         → "how-to-feed-cattle-in-winter-a1b2c3d4"
 */
export function generateSlug(title) {
    const base = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 80);
    const suffix = randomUUID().replace(/-/g, "").slice(0, 8);
    return `${base}-${suffix}`;
}
//# sourceMappingURL=slug.util.js.map