player.onChat("colmenas", function () {
    blocks.fill(
    BIRCH_SAPLING,
    pos(-40, 0, -40),
    pos(40, 0, 40),
    FillOperation.Replace
    )
    blocks.fill(
    YELLOW_FLOWER,
    pos(-30, 0, -30),
    pos(30, 0, 30),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(-24, -1, -24),
    pos(-20, -1, -20),
    FillOperation.Replace
    )
    for (let index = 0; index < 60; index++) {
        blocks.place(BEEHIVE, randpos(
        pos(-20, 0, -20),
        pos(20, 0, 20)
        ))
        mobs.spawn(BEE, randpos(
        pos(-20, 0, -20),
        pos(20, 0, 20)
        ))
    }
})
