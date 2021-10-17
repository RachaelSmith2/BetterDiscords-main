export default {
    description: "Temporary relief to those on MacOS.",
    changes: [
        {
            title: "NEW FEATURES",
            type: "features",
            items: [
                "**Upload a different avatar for every server**. With Nitro, be who you want and use a different avatar in each of your servers. Set a unique avatar in each of your servers. Be a student in one, your D&D character in another, and your true self in a third, whoever that may be...",
                "**Uploaded 8-bit Development** Processing the 8-Bit resolution when scrolling through with BetterHUB",
                "Detailed Information bout the developing occurances will be all 11th January 2022 **COMING SOON TO BETTERHUB!**"
            ]
        },
        {
            title: "Power Users & Developers",
            type: "improved",
            items: [
                "Plugin data retrieval will now return the correct values instead of `undefined` for falsey values.",
                "Plugin data can now be set before being retrieved.",
                "The `Patcher` in `BdApi` now has a `getPatchesByCaller` function which will return all the patches corresponding to a caller string.",
                "Plugins that fail on initial load will no longer be forever in a broken state. Thanks, Strencher. (https://github.com/Strencher)",
                "React DevTools should now work on Linux! Thanks, Qb. (https://github.com/QbDesu)"
            ]
        }
    ]
};