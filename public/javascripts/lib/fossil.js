(function() {
  window.specimens = {
    DunbarellaPELECYPOD: {
      name: "Dunbarella PELECYPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    GlycimerisPELECYPOD: {
      name: "Glycimeris PELECYPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    LimaPELECYPOD: {
      name: "Lima PELECYPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    ZygospiraBRACHIOPOD: {
      name: "Zygospira BRACHIOPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    SchuchertellaBRACHIOPOD: {
      name: "Schuchertella BRACHIOPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    PlatystrophiaBRACHIOPOD: {
      name: "Platystrophia BRACHIOPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    SpiriferBRACHIOPOD: {
      name: "Spirifer BRACHIOPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    FlexicalymeneTRILOBYTE: {
      name: "Flexicalymene TRILOBYTE",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    RhomboporaBRYOZOAN: {
      name: "Rhombopora BRYOZOAN",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    TaxocrinusCRINOID: {
      name: "Taxocrinus CRINOID",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    DolorthoscerasCEPHALOPOD: {
      name: "Dolorthosceras CEPHALOPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    GASTROPOD: {
      name: "GASTROPOD",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    },
    StreptelasmaHORNCORAL: {
      name: "Streptelasma HORN CORAL",
      photo_image: "test_photo_image",
      drawing_image: "test_drawing_image",
      description: "This is a test description"
    }
  };
  window.fossils_data = [
    {
      key_pair: 1,
      statement: "The fossil resembles a modern day seashell",
      next_statement_pair: 2
    }, {
      key_pair: 1,
      statement: "The fossil does not resembles a modern day seashell",
      next_statement_pair: 8
    }, {
      key_pair: 2,
      statement: "The top side of the fossil is rounded with ribs",
      next_statement_pair: 3
    }, {
      key_pair: 2,
      statement: "The top and bottom of the fossil have ribs and ridges",
      next_statement_pair: 5
    }, {
      key_pair: 3,
      statement: "The fossil has a circle or oval outline shape",
      next_statement_pair: 4
    }, {
      key_pair: 3,
      statement: "The fossil has a flat semi-circle shape",
      specimen: specimens.DunbarellaPELECYPOD
    }, {
      key_pair: 4,
      statement: "The fossil has a circular outline with light ribs",
      specimen: specimens.GlycimerisPELECYPOD
    }, {
      key_pair: 4,
      statement: "The fossil has an oval outline with a very pointed pedicle",
      specimen: specimens.LimaPELECYPOD
    }, {
      key_pair: 5,
      statement: "The fossil is larger than pinky fingernail",
      next_statement_pair: 6
    }, {
      key_pair: 5,
      statement: "The fossil is approximate pinky fingernail size",
      specimen: specimens.ZygospiraBRACHIOPOD
    }, {
      key_pair: 6,
      statement: "The fossil has very distinct ribs",
      next_statement_pair: 7
    }, {
      key_pair: 6,
      statement: "The fossil has faint ribs with a predominant central ridge",
      specimen: specimens.SchuchertellaBRACHIOPOD
    }, {
      key_pair: 7,
      statement: "The fossil has large ribs and very slight ridge",
      specimen: specimens.PlatystrophiaBRACHIOPOD
    }, {
      key_pair: 7,
      statement: "The fossil has predominant ridge and valley",
      specimen: specimens.SpiriferBRACHIOPOD
    }, {
      key_pair: 8,
      statement: "The fossil is long and tubular (tube shape) or conical (cone shape)",
      next_statement_pair: 9
    }, {
      key_pair: 8,
      statement: "The fossil is ribbed with three sections and a lip",
      specimen: specimens.FlexicalymeneTRILOBYTE
    }, {
      key_pair: 9,
      statement: "The fossil is tubular",
      next_statement_pair: 10
    }, {
      key_pair: 9,
      statement: "The fossil is conical",
      next_statement_pair: 12
    }, {
      key_pair: 10,
      statement: "The fossil has round sections",
      next_statement_pair: 11
    }, {
      key_pair: 10,
      statement: "The fossil is branching with pin holes",
      specimen: specimens.RhomboporaBRYOZOAN
    }, {
      key_pair: 11,
      statement: "The fossil is thin like a pencil and has holes on cross-section",
      specimen: specimens.TaxocrinusCRINOID
    }, {
      key_pair: 11,
      statement: "The fossil is wide with elongating ribs",
      specimen: specimens.DolorthoscerasCEPHALOPOD
    }, {
      key_pair: 12,
      statement: "The fossil has a spiral shape",
      specimen: specimens.GASTROPOD
    }, {
      key_pair: 12,
      statement: "The fossil resembles a dinosaur tooth with radial sections",
      specimen: specimens.StreptelasmaHORNCORAL
    }
  ];
}).call(this);
