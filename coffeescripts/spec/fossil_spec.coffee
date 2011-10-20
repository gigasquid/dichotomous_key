describe 'Fossil Key Data', ->
  it "has many records", ->
    size = fossils_data.length
    expect(size).toBe(24)

  it "has a key pair", ->
    first_key = fossils_data[0]
    expect(first_key.key_pair).toBe(1)

  it "has a statement", ->
    first_key = fossils_data[0]
    expect(first_key.statement).toBe("The fossil resembles a modern day seashell")

  it "can have an specimen", ->
    key_with_specimen = fossils_data[5]
    expect(key_with_specimen.specimen.name).toBe("Dunbarella PELECYPOD")
    expect(key_with_specimen.specimen.photo_image).toBe("test_photo_image")
    expect(key_with_specimen.specimen.drawing_image).toBe("test_drawing_image")
    expect(key_with_specimen.specimen.description).toBe("This is a test description")




