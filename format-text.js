const env = $.NSProcessInfo.processInfo.environment;

function toKebabCase(str, version) {
	const kebabText = str.trim().toLowerCase().replace(/\s+/g, "-");
	return `${kebabText}-v${version}`;
}

function run() {
	const text = env.objectForKey("text")?.js;
	const version = env.objectForKey("version")?.js;

	return toKebabCase(text, version);
}
