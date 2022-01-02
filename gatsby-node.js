exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: "/homepage",
        toPath: "/",
        isPermanent: true,
    });
    createRedirect({
        fromPath: "/homepage/games",
        toPath: "/games/",
        isPermanent: true,
    });
    createRedirect({
        fromPath: "/homepage/contents/cpp_binaryio",
        toPath: "https://cdecrement.blog.fc2.com/blog-entry-65.html",
        isPermanent: true,
    });
    createRedirect({
        fromPath: "/homepage/otherContents/turingmachineimulator",
        toPath: "/others/turingmachinesimulator/",
        isPermanent: true,
    });
    createRedirect({
        fromPath: "/WirePlanet",
        toPath: "/wireplanet/",
        isPermanent: true,
    });
}